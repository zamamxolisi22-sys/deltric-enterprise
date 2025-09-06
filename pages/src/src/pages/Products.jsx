export default function Products() {
  return (
    <section style={{padding:'40px 0'}}>
      <h1>Products</h1>
      <p className="muted" style={{maxWidth:760}}>
        Standardized deliverables clients can start with immediately, then expand into broader execution.
      </p>

      {/* Product cards */}
      <div className="grid grid3" style={{marginTop:24}}>
        <article className="card">
          <h3>Compliance & Risk Assessment</h3>
          <p className="muted small">
            Client-ready report (10–20 pages) covering procurement red-flags, B-BBEE pathway,
            regulatory map, and mitigation plan.
          </p>
          <ul className="small" style={{marginTop:8}}>
            <li>Procurement & legal checks</li>
            <li>B-BBEE scoring pathway</li>
            <li>Risk register + controls</li>
          </ul>
          <div style={{marginTop:12,display:'flex',gap:8}}>
            <a className="btn" href="/contact">Request sample</a>
            <a className="btn-ghost" href="/insights">See insights</a>
          </div>
        </article>

        <article className="card">
          <h3>Intel Report Pack</h3>
          <p className="muted small">
            Daily briefs → Weekly Top-10 → Monthly synthesis with opportunity scoring and trendlines.
          </p>
          <ul className="small" style={{marginTop:8}}>
            <li>Policy & sector watch</li>
            <li>Top-10 opportunity ranking</li>
            <li>Signals dashboard (CSV/JSON)</li>
          </ul>
          <div style={{marginTop:12,display:'flex',gap:8}}>
            <a className="btn" href="/contact">Start a trial</a>
            <a className="btn-ghost" href="/blog">View samples</a>
          </div>
        </article>

        <article className="card">
          <h3>Opportunity Tracker</h3>
          <p className="muted small">
            Central pipeline of tenders/opportunities: values, deadlines, partner fit and status.
          </p>
          <ul className="small" style={{marginTop:8}}>
            <li>Readiness & fit scoring</li>
            <li>Deadline & alerts fields</li>
            <li>Partner/JV notes</li>
          </ul>
          <div style={{marginTop:12,display:'flex',gap:8}}>
            <a className="btn" href="/contact">Get the template</a>
            <a className="btn-ghost" href="/services">Implementation help</a>
          </div>
        </article>
      </div>

      {/* Optional pricing tiers (can hide or adjust later) */}
      <div className="card" style={{marginTop:28}}>
        <h3 style={{marginTop:0}}>Typical Engagement Tiers</h3>
        <div className="grid grid3" style={{marginTop:12}}>
          <div className="panel">
            <strong>Starter</strong>
            <div className="muted small">Best for initial market read</div>
            <ul className="small" style={{marginTop:8}}>
              <li>Monthly Intel Pack</li>
              <li>One shortlist review</li>
              <li>Email support</li>
            </ul>
          </div>
          <div className="panel">
            <strong>Operational</strong>
            <div className="muted small">For active tendering</div>
            <ul className="small" style={{marginTop:8}}>
              <li>Weekly Top-10 + Tracker</li>
              <li>Compliance & Risk Assessment</li>
              <li>Bi-weekly calls</li>
            </ul>
          </div>
          <div className="panel">
            <strong>Enterprise</strong>
            <div className="muted small">For multi-stream delivery</div>
            <ul className="small" style={{marginTop:8}}>
              <li>Daily briefs + APIs</li>
              <li>Partner diligence support</li>
              <li>Quarterly strategy review</li>
            </ul>
          </div>
        </div>
        <div style={{marginTop:12}}>
          <a className="btn" href="/contact">Ask for pricing</a>
        </div>
      </div>
    </section>
  )
}