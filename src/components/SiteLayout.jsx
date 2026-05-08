import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Why KabaddiPulse', to: '/why-kabaddipulse' },
  { label: 'Our Story', to: '/our-story' },
  { label: 'News & Updates', to: '/news-updates' },
  { label: 'Contact Us', to: '/contact' },
]

function SiteLayout({ children }) {
  return (
    <div className="page">
      <header className="site-header">
        <NavLink className="brand-block" to="/" aria-label="KabaddiPulse home">
          <img 
            src="/logo.png" 
            alt="KabaddiPulse Logo" 
            height="52"
            style={{ objectFit: 'contain', flexShrink: 0 }}
          />
        </NavLink>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink 
              key={item.label} 
              to={item.to}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <a 
            href="https://kabaddi-app.vercel.app" 
            target="_blank" 
            rel="noreferrer"
            className="btn btn-secondary nav-cta"
            style={{ marginRight: '12px' }}
          >
            Live Demo
          </a>
          <NavLink className="btn btn-primary nav-cta" to="/contact">
            Early Access
          </NavLink>
        </div>
      </header>

      <main className="content">
        {children}
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr 1fr', 
            gap: '40px',
            textAlign: 'left',
            marginBottom: '40px'
          }}>
            <div className="footer-brand-side">
              <img src="/logo.png" alt="KabaddiPulse Logo" height="48" style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
              <p style={{ marginTop: '12px', color: 'rgba(255,255,255,0.6)' }}>
                Building India&apos;s digital infrastructure for grassroots Kabaddi.
              </p>
            </div>
            
            <div className="footer-nav-side">
              <h4 style={{ color: 'white', marginBottom: '16px' }}>Platform</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a href="https://kabaddi-app.vercel.app" target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>
                  MVP Demo App
                </a>
                <NavLink to="/contact" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>
                  Early Access
                </NavLink>
              </div>
            </div>

            <div className="footer-social-side">
              <h4 style={{ color: 'white', marginBottom: '16px' }}>Follow Us</h4>
              <a 
                href="https://www.instagram.com/kabaddipulse_official?igsh=MWZobmQyeWpsc2dxZA==" 
                target="_blank" 
                rel="noreferrer"
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  color: 'white', 
                  textDecoration: 'none',
                  background: 'rgba(255,255,255,0.1)',
                  padding: '8px 16px',
                  borderRadius: '12px',
                  transition: 'background 0.2s'
                }}
                className="insta-link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                Instagram
              </a>
            </div>
          </div>

          <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px' }}>
            <p>&copy; {new Date().getFullYear()} KabaddiPulse. All rights reserved.</p>
            <div className="footer-links" style={{ marginTop: '12px' }}>
              <NavLink to="/" style={{ color: 'var(--kp-orange)' }}>Back to top</NavLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SiteLayout
