export default function Insights() {
  return (
    <section style={{padding:'40px 0'}}>
      <h1>Insights</h1>
      <p className="muted" style={{maxWidth:760}}>
        Curated signal packs and checklists that help leaders move from uncertainty to action.
      </p>

      <div className="grid grid3" style={{marginTop:24}}>
        <article className="card">
          <h3>Weekly Top-10 Opportunities</h3>
          <p className="muted small">
            Ranked by value, readiness and fit. Delivered every Monday with links and deadlines.
          </p>
          <ul className="small" style={{marginTop:8}}>
            <li>Rationale + scoring</li>
            <li>Compliance red flags</li>
            <li>Suggested partner fit</li>
          </ul>
          <div style={{marginTop:12}}><a className="btn" href="/contact">Subscribe</a></div>
        </article>

        <article className="card">
          <h3>Compliance Patterns We See</h3>
          <p className="muted small">
            Where bids stumble and how to tighten documentation to pass procurement gates.
          </p>
          <ul className="small" style={{marginTop:8}}>
            <li>Common omissions & fixes</li>
            <li>Audit-ready structures</li>
            <li>Practical templates</li>
          </ul>
          <div style={{marginTop:12}}><a className="btn-ghost" href="/products">See Products</a></div>
        </article>

        <article className="card">
          <h3>Partner Diligence Checklist</h3>
          <p className="muted small">
            Quick checks that prevent slow, expensive mistakes in JV and supplier selection.
          </p>
          <ul className="small" style={{marginTop:8}}>
            <li>Sanctions & adverse media</li>
            <li>Operational references</li>
            <li>Fit-for-purpose criteria</li>
          </ul>
          <div style={{marginTop:12}}><a className="btn-ghost" href="/contact">Request the checklist</a></div>
        </article>
      </div>

      <div className="card" style={{marginTop:28}}>
        <h3 style={{marginTop:0}}>Sample Metrics We Track</h3>
        <div className="grid grid3" style={{marginTop:12}}>
          <div className="panel"><strong>Tenders scanned</strong><div className="muted small">Volume & category</div></div>
          <div className="panel"><strong>Turnaround time</strong><div className="muted small">Brief → decision</div></div>
          <div className="panel"><strong>Compliance success</strong><div className="muted small">Doc completeness</div></div>
        </div>
      </div>
    </section>
  )
}