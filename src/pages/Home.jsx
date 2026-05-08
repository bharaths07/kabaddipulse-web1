import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Home() {
  return (
    <>
      <section className="hero section" id="hero">
        <div className="container">
          <div className="hero-layout">
            <motion.div 
              className="hero-copy"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="eyebrow">GRASSROOTS REVOLUTION</span>
              <h1>
                India&apos;s Grassroots <br />
                <span className="text-gradient">Kabaddi Platform</span>
              </h1>
              <p className="lead">
                Live scoring, tournament management, and player statistics built for the next generation of Kabaddi stars.
              </p>
              <div className="hero-cta">
                <Link className="btn btn-primary" to="/contact">
                  Join Early Access
                </Link>
                <a 
                  className="btn btn-secondary" 
                  href="https://kabaddi-app.vercel.app" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  Try Demo App
                </a>
              </div>
              <p className="trust-line">Empowering players and organizers across 500+ villages.</p>
            </motion.div>

            <motion.div 
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="phone-mockup floating-phone">
                <div className="phone-frame">
                  <div className="phone-top">
                    <span className="earpiece"></span>
                    <span className="front-camera"></span>
                  </div>
                  <div className="phone-screen">
                    <p className="app-brand">KabaddiPulse</p>
                    <p className="app-sub">Live Scoreboard</p>
                    
                    <div className="mock-live-card">
                      <div className="mock-live-tag">
                        <span className="live-dot"></span> LIVE
                      </div>
                      <div className="mock-match-info" style={{ marginTop: '12px' }}>
                        <p style={{ fontWeight: 800, fontSize: '1rem', color: '#111' }}>SKBC Warriors</p>
                        <p style={{ fontSize: '1.2rem', fontWeight: 900, color: '#ff5a00', margin: '4px 0' }}>24 - 18</p>
                        <p style={{ fontWeight: 800, fontSize: '1rem', color: '#111' }}>Village Tigers</p>
                      </div>
                    </div>

                    <div className="mock-login-card">
                      <p className="mock-field-label">Next Tournament</p>
                      <p className="mock-field-value">KPL Season 5 - Mandya</p>
                      <p style={{ fontSize: '0.75rem', marginTop: '4px' }}>Starting in 2 days</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '120%',
                height: '120%',
                background: 'radial-gradient(circle, rgba(255, 90, 0, 0.1) 0%, transparent 70%)',
                zIndex: 1,
                pointerEvents: 'none'
              }}></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container">
          <h2>Transforming the Game</h2>
          <p className="section-text">
            KabaddiPulse provides the digital tools that grassroots Kabaddi needs to grow, thrive, and gain the recognition it deserves.
          </p>
          
          <div className="grid three-col">
            <motion.article 
              className="card"
              whileHover={{ y: -10 }}
            >
              <div className="card-icon" style={{ fontSize: '2rem', marginBottom: '16px' }}>🏟️</div>
              <h3>Why KabaddiPulse</h3>
              <p>Discover our mission to digitalize grassroots sports across India.</p>
              <Link className="news-read-more" to="/why-kabaddipulse">
                Learn More &rarr;
              </Link>
            </motion.article>

            <motion.article 
              className="card"
              whileHover={{ y: -10 }}
            >
              <div className="card-icon" style={{ fontSize: '2rem', marginBottom: '16px' }}>📖</div>
              <h3>Our Story</h3>
              <p>Built by players, for players. See how we started our journey.</p>
              <Link className="news-read-more" to="/our-story">
                Read Story &rarr;
              </Link>
            </motion.article>

            <motion.article 
              className="card"
              whileHover={{ y: -10 }}
            >
              <div className="card-icon" style={{ fontSize: '2rem', marginBottom: '16px' }}>🚀</div>
              <h3>Latest Updates</h3>
              <p>Stay informed about our latest features and community launches.</p>
              <Link className="news-read-more" to="/news-updates">
                See News &rarr;
              </Link>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Ready to Step onto the Mat?</h2>
          <p className="lead" style={{ marginInline: 'auto' }}>
            Be among the first to experience the future of digital Kabaddi.
          </p>
          <div className="hero-cta" style={{ justifyContent: 'center', marginTop: '24px' }}>
            <Link className="btn btn-primary" to="/contact">
              Get Started Now
            </Link>
            <a 
              className="btn btn-secondary" 
              href="https://kabaddi-app.vercel.app" 
              target="_blank" 
              rel="noreferrer"
            >
              View Demo
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
