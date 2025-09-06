export default function Services() {
  return (
    <section style={{padding:'40px 0'}}>
      <h1>Our Services</h1>
      <p className="muted">We provide a modular stack leaders use together or separately, depending on need.</p>

      <div className="grid grid3" style={{marginTop:24}}>
        <div className="card">
          <h3>Intelligence & Research</h3>
          <p className="muted small">
            Sector insights, government policy monitoring, and opportunity pipelines
            tailored to your strategy.
          </p>
        </div>
        <div className="card">
          <h3>Compliance & Risk</h3>
          <p className="muted small">
            End-to-end B-BBEE, procurement, and labor law mapping with audit-ready documentation.
          </p>
        </div>
        <div className="card">
          <h3>Execution & Enablement</h3>
          <p className="muted small">
            Partner scouting, diligence, and coordination to help you deliver faster and safer.
          </p>
        </div>
      </div>
    </section>
  )
}
