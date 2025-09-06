export default function Contact() {
  return (
    <section style={{padding:'40px 0'}}>
      <h1>Contact Deltric</h1>
      <p className="muted">Let us know your requirements or request a sample pack of our intelligence reports.</p>

      {/* Netlify form: submissions appear in Netlify dashboard */}
      <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field"
            className="card" style={{maxWidth:720,marginTop:24}}>
        <input type="hidden" name="form-name" value="contact" />
        <p style={{display:'none'}}><label>Don’t fill this out: <input name="bot-field" /></label></p>

        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
          <div>
            <label className="small">Name</label>
            <input required name="name" />
          </div>
          <div>
            <label className="small">Email</label>
            <input required type="email" name="email" />
          </div>
        </div>

        <div style={{marginTop:12}}>
          <label className="small">Message</label>
          <textarea required rows="6" name="message" />
        </div>

        <button className="btn" style={{marginTop:12}}>Send Message</button>
      </form>
    </section>
  )
}