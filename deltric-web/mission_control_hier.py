# mission_control_hier.py
# Deltric hierarchical agent orchestrator (no external deps)

from dataclasses import dataclass, field
from typing import List, Dict, Optional
from datetime import datetime
from pathlib import Path
import sys
import textwrap

# ---------- Models ----------

@dataclass
class Agent:
    role: str
    purpose: str
    department: str
    supervisor: Optional[str]  # role of supervisor (None for top)
    inputs: List[str]
    outputs: List[str]
    kpis: List[str]

    def think(self, task: str) -> str:
        # Deterministic, readable output (no LLMs). Customize per agent later.
        lines = [
            f"[{self.role}] RECEIVED TASK:",
            f"  {task}",
            f"[{self.role}] WILL PRODUCE:",
            f"  - " + "\n  - ".join(self.outputs),
            f"[{self.role}] ASSUMED INPUTS:",
            f"  - " + "\n  - ".join(self.inputs),
        ]
        return "\n".join(lines)

@dataclass
class Department:
    name: str
    lead_role: str
    agent_roles: List[str]

@dataclass
class Orchestrator:
    agents: Dict[str, Agent] = field(default_factory=dict)       # key: role (lower)
    departments: Dict[str, Department] = field(default_factory=dict)
    reports_dir: Path = field(default_factory=lambda: Path("reports"))

    def add_agent(self, agent: Agent):
        self.agents[agent.role.lower()] = agent

    def add_department(self, dept: Department):
        self.departments[dept.name.lower()] = dept

    def get(self, role: str) -> Optional[Agent]:
        return self.agents.get(role.lower().strip())

    # ---------- Display ----------

    def status(self):
        print("\n=== DELTRIC ORG STATUS ===")
        print(f"Departments: {len(self.departments)} | Agents: {len(self.agents)}\n")
        for dept in self.departments.values():
            print(f"[DEPT] {dept.name} (Lead: {dept.lead_role})")
            for r in dept.agent_roles:
                a = self.get(r)
                if not a: continue
                sup = a.supervisor or "—"
                print(f"  - {a.role}  |  Supervisor: {sup}")
            print()
        print("Use `python mission_control_hier.py tree` to view hierarchy.\n")

    def tree(self):
        print("\n=== DELTRIC HIERARCHY (Strategy → Operations → Units) ===\n")
        # Print a top-down tree from Strategy
        roots = [a for a in self.agents.values() if a.supervisor is None]
        for root in roots:
            self._print_subtree(root, level=0)
        print()

    def _print_subtree(self, agent: Agent, level: int):
        indent = "  " * level
        print(f"{indent}- {agent.role}  [{agent.department}]")
        # children = agents who report to this agent
        children = [a for a in self.agents.values() if (a.supervisor or "").lower() == agent.role.lower()]
        for c in children:
            self._print_subtree(c, level + 1)

    # ---------- Execution ----------

    def directive(self, text: str):
        """
        High-level instruction from Strategy Agent.
        Flow:
          Strategy -> Operations -> Functional agents
        """
        now = datetime.utcnow().strftime("%Y%m%d_%H%M%S")
        self.reports_dir.mkdir(parents=True, exist_ok=True)

        strategy = self.get("Strategy Agent")
        ops = self.get("Operations Agent")
        if not strategy or not ops:
            print("[ERR] Strategy Agent or Operations Agent missing.")
            return

        # Strategy acknowledges directive
        strat_out = strategy.think(f"Directive: {text}")
        self._write_report(now, strategy.role, "directive_ack", strat_out)

        # Operations breaks directive into unit tasks (very simple fan-out)
        ops_plan = textwrap.dedent(f"""\
            Breakdown plan for directive:
            - Intelligence: validate market & policy, produce Top-10 with deadlines.
            - Compliance: map B-BBEE & procurement gates, flag red flags.
            - Partnering: shortlist & validate local partners.
            - Proposal: create exec summary outline; collect requirements.
            - Marketing: prepare positioning/outreach for sector.
        """)
        ops_out = ops.think(ops_plan)
        self._write_report(now, ops.role, "coordination_plan", ops_out)

        # Fan-out to relevant roles (edit this list to change who gets triggered)
        fanout = [
            "Intel Analyst",
            "Compliance & Risk Lead",
            "Partner Scout",
            "Proposal/Tender Writer",
            "Marketing & Sales",
            "Delivery/PMO",
            "Financial Modeler",
            "Legal/Contracts Liaison",
            "Data Engineer (Pipelines)",
            "WebOps",
            "Account/Client Success"
        ]
        for role in fanout:
            ag = self.get(role)
            if not ag: 
                continue
            task = f"Execute: {text}  // per {ag.department} remit"
            out = ag.think(task)
            self._write_report(now, ag.role, "task_ack", out)

        print(f"[OK] Directive processed. Reports written to: {self.reports_dir.resolve()}")

    def run_task(self, role: str, task: str):
        ag = self.get(role)
        if not ag:
            print(f"[ERR] Agent '{role}' not found. Use `status` to list roles.")
            return
        now = datetime.utcnow().strftime("%Y%m%d_%H%M%S")
        self.reports_dir.mkdir(parents=True, exist_ok=True)
        out = ag.think(task)
        self._write_report(now, ag.role, "ad_hoc", out)
        print(f"[OK] Task run for {ag.role}. See reports in: {self.reports_dir.resolve()}")

    # ---------- Utilities ----------

    def _write_report(self, ts: str, role: str, kind: str, content: str):
        # Windows-safe filenames
        safe_role = role.replace("/", "-").replace(" ", "_")
        fname = f"{ts}__{safe_role}__{kind}.txt"
        path = self.reports_dir / fname
        path.write_text(content, encoding="utf-8")

# ---------- Bootstrap roster ----------

def build_orchestrator() -> Orchestrator:
    o = Orchestrator()

    # Departments
    o.add_department(Department(
        name="Intelligence",
        lead_role="Strategy Agent",
        agent_roles=[
            "Strategy Agent", "Intel Analyst", "Financial Modeler"
        ]
    ))
    o.add_department(Department(
        name="Operations",
        lead_role="Operations Agent",
        agent_roles=[
            "Operations Agent", "Compliance & Risk Lead", "Legal/Contracts Liaison",
            "Proposal/Tender Writer", "Delivery/PMO", "Data Engineer (Pipelines)"
        ]
    ))
    o.add_department(Department(
        name="Growth",
        lead_role="Marketing & Sales",
        agent_roles=[
            "Marketing & Sales", "Partner Scout", "Account/Client Success", "WebOps"
        ]
    ))

    # Agents (top → down)
    o.add_agent(Agent(
        role="Strategy Agent",
        purpose="Set vision, select markets/opportunities, define priorities.",
        department="Intelligence",
        supervisor=None,
        inputs=["intel_briefs", "financial_models", "case_evidence"],
        outputs=["Strategic directives", "Go/No-Go decisions"],
        kpis=["win-rate", "focus score", "capital efficiency"]
    ))
    o.add_agent(Agent(
        role="Operations Agent",
        purpose="Translate strategy into coordinated execution plans across functions.",
        department="Operations",
        supervisor="Strategy Agent",
        inputs=["strategic_directive", "capacity_map", "deadlines"],
        outputs=["Execution roadmap", "Work assignments", "Risks & mitigations"],
        kpis=["on-time delivery", "bottleneck resolution", "handoff quality"]
    ))

    # Intelligence unit
    o.add_agent(Agent(
        role="Intel Analyst",
        purpose="Scan policy, sector news and tenders; rank opportunities.",
        department="Intelligence",
        supervisor="Strategy Agent",
        inputs=["keywords", "feeds", "sector_focus"],
        outputs=["Top-10 list", "Opportunity briefs", "Deadlines & links"],
        kpis=["opportunities/week", "hit-rate", "time-to-brief"]
    ))
    o.add_agent(Agent(
        role="Financial Modeler",
        purpose="Scenario models, pricing, sensitivity.",
        department="Intelligence",
        supervisor="Strategy Agent",
        inputs=["assumptions", "rates", "volumes"],
        outputs=["Pricing sheet", "Sensitivity table", "Assumptions log"],
        kpis=["model turnaround", "review pass rate"]
    ))

    # Operations unit
    o.add_agent(Agent(
        role="Compliance & Risk Lead",
        purpose="B-BBEE & procurement gates; audit-ready packs; red-flag memos.",
        department="Operations",
        supervisor="Operations Agent",
        inputs=["RFP docs", "client_profile", "jurisdiction_rules"],
        outputs=["Compliance checklist", "Risk register", "Mitigation plan"],
        kpis=["zero missing docs", "audit issues avoided"]
    ))
    o.add_agent(Agent(
        role="Legal/Contracts Liaison",
        purpose="Clause checks, redlines, NDA/MSA/SOW alignment.",
        department="Operations",
        supervisor="Operations Agent",
        inputs=["counterparty_docs", "templates", "risk_policy"],
        outputs=["Clause summary", "Redline suggestions", "Approval note"],
        kpis=["cycle time", "issue escape rate"]
    ))
    o.add_agent(Agent(
        role="Proposal/Tender Writer",
        purpose="Draft & assemble bid packs from templates.",
        department="Operations",
        supervisor="Operations Agent",
        inputs=["RFP", "compliance_pack", "case_studies", "pricing_model"],
        outputs=["Draft proposal", "Submission checklist", "Executive summary"],
        kpis=["on-time submissions", "pass rate", "win-rate"]
    ))
    o.add_agent(Agent(
        role="Delivery/PMO",
        purpose="Plan timelines, RAID, owners; weekly reporting.",
        department="Operations",
        supervisor="Operations Agent",
        inputs=["scope", "team", "milestones"],
        outputs=["Project plan", "RAID log", "Weekly report"],
        kpis=["milestone on-time %", "risk closure rate"]
    ))
    o.add_agent(Agent(
        role="Data Engineer (Pipelines)",
        purpose="Maintain intel parsing/export for dashboards.",
        department="Operations",
        supervisor="Operations Agent",
        inputs=["feeds", "parsers", "schema"],
        outputs=["Clean CSV/JSON", "Health report"],
        kpis=["pipeline uptime", "parse error rate"]
    ))

    # Growth unit
    o.add_agent(Agent(
        role="Marketing & Sales",
        purpose="Outbound, newsletters, lead qualification; CRM hygiene.",
        department="Growth",
        supervisor="Strategy Agent",  # could also be Ops; choose based on preference
        inputs=["ICP", "offer", "content_snippets"],
        outputs=["Lead list", "Campaign messages", "Call notes"],
        kpis=["meetings/week", "SQLs", "pipeline value"]
    ))
    o.add_agent(Agent(
        role="Partner Scout",
        purpose="Source/validate partners & suppliers; JV shortlist.",
        department="Growth",
        supervisor="Marketing & Sales",
        inputs=["capability_requirements", "sector", "region"],
        outputs=["Shortlist", "Validation notes", "Contact pack"],
        kpis=["validated partners/month", "conversion to JV"]
    ))
    o.add_agent(Agent(
        role="Account/Client Success",
        purpose="Onboarding, QBRs, renewals, references.",
        department="Growth",
        supervisor="Marketing & Sales",
        inputs=["contract", "delivery_artifacts", "usage_metrics"],
        outputs=["Onboarding plan", "QBR deck", "Renewal proposal"],
        kpis=["renewal rate", "reference count"]
    ))
    o.add_agent(Agent(
        role="WebOps",
        purpose="Website deploys, forms routing, tracking/UTM, uptime checks.",
        department="Growth",
        supervisor="Marketing & Sales",
        inputs=["repo", "env_vars", "routes"],
        outputs=["Deployed site", "Form test log", "Uptime report"],
        kpis=["deploy success", "no 404s"]
    ))

    return o

# ---------- CLI ----------

HELP = """
Usage:
  python mission_control_hier.py status
  python mission_control_hier.py tree
  python mission_control_hier.py directive "<high-level instruction>"
  python mission_control_hier.py run "<agent role>" "<task description>"
  python mission_control_hier.py openreports

Examples:
  python mission_control_hier.py status
  python mission_control_hier.py tree
  python mission_control_hier.py directive "Pursue storage tenders in SA: shortlist top 10; prep compliance & partner map."
  python mission_control_hier.py run "Intel Analyst" "Scan SA energy tenders; return Top-10 with deadlines & links."
"""

def open_reports_folder(path: Path):
    # Cross-platform best effort open
    try:
        import os, subprocess, platform
        if platform.system() == "Windows":
            os.startfile(path)  # type: ignore[attr-defined]
        elif platform.system() == "Darwin":
            subprocess.run(["open", str(path)], check=False)
        else:
            subprocess.run(["xdg-open", str(path)], check=False)
        print(f"[OK] Opened folder: {path.resolve()}")
    except Exception as e:
        print(f"[WARN] Could not open folder automatically: {e}\nPath: {path.resolve()}")

def main():
    orch = build_orchestrator()
    args = sys.argv[1:]
    if not args:
        print(HELP); return

    cmd = args[0].lower()
    if cmd == "status":
        orch.status()
    elif cmd == "tree":
        orch.tree()
    elif cmd == "directive":
        if len(args) < 2:
            print("[ERR] Provide directive text in quotes."); return
        orch.directive(args[1])
    elif cmd == "run":
        if len(args) < 3:
            print("[ERR] Usage: run \"<agent role>\" \"<task>\""); return
        orch.run_task(args[1], args[2])
    elif cmd == "openreports":
        orch.reports_dir.mkdir(parents=True, exist_ok=True)
        open_reports_folder(orch.reports_dir)
    else:
        print(HELP)

if __name__ == "__main__":
    main()