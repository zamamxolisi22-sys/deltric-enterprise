const posts = [
  {
    date: '2025-09-02',
    title: 'Short RFP Windows Are a Readiness Problem',
    summary: 'In South African tenders, 10–21 day windows are common. Winning teams prepare compliance packs and partner maps upfront.'
  },
  {
    date: '2025-09-03',
    title: 'Compliance as Competitive Advantage',
    summary: 'B-BBEE and procurement alignment often determine who gets to compete—and who doesn’t.'
  },
  {
    date: '2025-09-04',
    title: 'Partner Diligence That Actually Works',
    summary: 'Fast checks that prevent slow, expensive mistakes in supplier and JV selection.'
  }
]

export default function Blog() {
  return (
    <section style={{padding:'40px 0'}}>
      <h1>Blog</h1>
      <p className="muted" style={{maxWidth:760}}>
        Brief, decision-oriented notes from the field. More long-form pieces coming soon.
      </p>

      <div className="grid grid3" style={{marginTop:24}}>
        {posts.map((p, i) => (
          <article key={i} className="card">
            <div className="small muted">{p.date}</div>
            <h3 style={{margin:'6px 0'}}>{p.title}</h3>
            <p className="muted small">{p.summary}</p>
            <div style={{marginTop:12}}>
              <a className="btn-ghost" href="/contact">Request full brief</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}