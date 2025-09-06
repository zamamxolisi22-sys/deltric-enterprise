export default function Home() {
  return (
    <section style={{padding:'40px 0'}}>
      <div style={{display:'grid',gridTemplateColumns:'1.15fr 1fr',gap:24}}>
        <div>
          <h1 style={{fontSize:42,lineHeight:1.1,marginBottom:16}}>
            Building clarity in <span style={{color:'#cfd3ff'}}>complex systems</span>.
          </h1>
          <p className="muted" style={{maxWidth:720}}>
            Deltric (PTY) LTD provides <b>intelligence</b>, <b>compliance</b> and 
            <b> execution support</b> for organizations seeking to expand into 
            new markets, win tenders, and build resilient operations in South Africa and beyond.
          </p>
          <div style={{marginTop:22,display:'flex',gap:12,flexWrap:'wrap'}}>
            <a href="/services" className="btn">Explore Services</a>
            <a href="/products" className="btn-ghost">Products</a>
          </div>
          <div style={{marginTop:24,display:'flex',gap:18,flexWrap:'wrap'}} className="muted">
            <span>✔ Audit-ready compliance</span>
            <span>✔ Trusted partner network</span>
            <span>✔ Outcomes-first delivery</span>
          </div>
        </div>

        <aside className="card">
          <h3 style={{marginTop:0}}>What clients gain</h3>
          <ul>
            <li>Decision-grade market & policy briefs</li>
            <li>Audit-ready compliance documentation</li>
            <li>Validated local suppliers & partners</li>
            <li>Lightweight tools for tracking & reporting</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}
