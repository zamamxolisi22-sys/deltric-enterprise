export default function CaseStudies() {
  return (
    <section style={{padding:'40px 0'}}>
      <h1>Case Studies</h1>
      <p className="muted" style={{maxWidth:760}}>
        Representative examples from energy, mining and public-sector work. Client names redacted.
      </p>

      <div className="grid grid3" style={{marginTop:24}}>
        <article className="card">
          <div className="small muted">Energy</div>
          <h3 style={{margin:'6px 0'}}>De-risking a Storage Bid</h3>
          <p className="muted small">
            Compliance path, partner alignment and risk memo led to a bankable submission within 14 days.
          </p>
          <ul className="small" style={{marginTop:8}}>
            <li>RFP gap analysis in 72h</li>
            <li>B-BBEE partner mapping</li>
            <li>Mitigation plan adopted</li>
          </ul>
        </article>

        <article className="card">
          <div className="small muted">Mining</div>
          <h3 style={{margin:'6px 0'}}>Supply-chain Visibility</h3>
          <p className="muted small">
            Telemetry + contract reform insights reduced demurrage costs by double-digits.
          </p>
          <ul className="small" style={{marginTop:8}}>
            <li>Counterparty risk screen</li>
            <li>Throughput bottleneck map</li>
            <li>Ops dashboard (weekly)</li>
          </ul>
        </article>

        <article className="card">
          <div className="small muted">Public</div>
          <h3 style={{margin:'6px 0'}}>Clean Tender Navigation</h3>
          <p className="muted small">
            Red-flag identification and documentation discipline improved audit outcomes.
          </p>
          <ul className="small" style={{marginTop:8}}>
            <li>Procurement rulebook map</li>
            <li>Document control system</li>
            <li>Audit-ready archive</li>
          </ul>
        </article>
      </div>

      {/* Proof elements */}
      <div className="card" style={{marginTop:28}}>
        <h3 style={{marginTop:0}}>What made these succeed</h3>
        <div className="grid grid3" style={{marginTop:12}}>
          <div className="panel">
            <strong>Readiness</strong>
            <p className="muted small">Pre-built compliance packs and partner rosters cut response time.</p>
          </div>
          <div className="panel">
            <strong>Discipline</strong>
            <p className="muted small">Clear document control and risk registers created audit confidence.</p>
          </div>
          <div className="panel">
            <strong>Local context</strong>
            <p className="muted small">On-the-ground validation reduced execution risk and noise.</p>
          </div>
        </div>
        <div style={{marginTop:12}}>
          <a className="btn" href="/contact">Request a redacted sample</a>
        </div>
      </div>
    </section>
  )
}