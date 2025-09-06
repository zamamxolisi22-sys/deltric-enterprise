export default function About() {
  return (
    <section style={{padding:'40px 0'}}>
      <h1>About Deltric</h1>
      <p className="muted" style={{maxWidth:760}}>
        Deltric (PTY) LTD operates at the intersection of <b>intelligence</b>, <b>compliance</b>, and <b>execution</b>.
        We help organizations build clarity in complex systems so they can expand, win tenders, and deliver reliably.
      </p>

      <div className="grid grid3" style={{marginTop:24}}>
        <div className="card">
          <div className="small muted">Who we are</div>
          <h3 style={{margin:'6px 0'}}>Private Company (PTY) LTD</h3>
          <p className="muted small">Registered in South Africa with a regional partner network across Africa.</p>
        </div>
        <div className="card">
          <div className="small muted">How we work</div>
          <h3 style={{margin:'6px 0'}}>Outcomes-First</h3>
          <p className="muted small">Audit-ready deliverables, disciplined risk management, and practical enablement.</p>
        </div>
        <div className="card">
          <div className="small muted">What you get</div>
          <h3 style={{margin:'6px 0'}}>Decision-Grade Outputs</h3>
          <p className="muted small">Clear briefs, compliance pathways, validated partners, and simple tracking tools.</p>
        </div>
      </div>

      <div className="card" style={{marginTop:28}}>
        <h3 style={{marginTop:0}}>Operating Principles</h3>
        <div className="grid grid3" style={{marginTop:12}}>
          <div className="panel">
            <strong>Readiness</strong>
            <p className="muted small">We prepare documentation and partner options before the window opens.</p>
          </div>
          <div className="panel">
            <strong>Clarity</strong>
            <p className="muted small">We turn noise into short, ranked choices with risk/impact context.</p>
          </div>
          <div className="panel">
            <strong>Discipline</strong>
            <p className="muted small">We maintain document control and audit trails across every engagement.</p>
          </div>
        </div>
      </div>

      <div style={{marginTop:20}}>
        <a className="btn" href="/services">Explore Services</a>
        <a className="btn-ghost" href="/contact" style={{marginLeft:8}}>Talk to us</a>
      </div>
    </section>
  )
}