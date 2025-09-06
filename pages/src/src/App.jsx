import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Products from './pages/Products'
import CaseStudies from './pages/CaseStudies'
import Insights from './pages/Insights'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div>
      <header style={{position:'sticky',top:0,background:'rgba(10,10,10,.65)',borderBottom:'1px solid #232323'}}>
        <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,flexWrap:'wrap'}}>
          <strong>Deltric (PTY) LTD</strong>
          <nav className="nav" style={{display:'flex',gap:6,flexWrap:'wrap'}}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/case-studies">Case Studies</NavLink>
            <NavLink to="/insights">Insights</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/case-studies" element={<CaseStudies/>} />
          <Route path="/insights" element={<Insights/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>

      <footer style={{borderTop:'1px solid #232323',marginTop:48,padding:'22px 0',color:'#aaa'}}>
        <div className="container" style={{display:'flex',justifyContent:'space-between',gap:10,flexWrap:'wrap'}}>
          <div>© {new Date().getFullYear()} Deltric (PTY) LTD • Johannesburg</div>
          <div className="small"><a href="/privacy">Privacy</a> • <a href="/terms">Terms</a></div>
        </div>
      </footer>
    </div>
  )
}
