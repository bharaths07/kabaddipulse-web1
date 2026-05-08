import { motion } from 'framer-motion'

function OurStory() {
  return (
    <section className="section" id="our-story">
      <div className="container">
        <div className="hero-layout" style={{ alignItems: 'start' }}>
          <div className="our-story-copy">
            <span className="eyebrow">THE JOURNEY</span>
            <h2>Built by the Community.</h2>
            <p className="lead" style={{ marginTop: '20px' }}>
              KabaddiPulse didn&apos;t start in a boardroom. It started on the dusty grounds of local tournaments where we saw the passion of players and the struggles of organizers.
            </p>
            <p>
              We realized that while Kabaddi was growing globally, the grassroots foundation was still operating in the analog age. We set out to build a platform that honors the traditions of the game while embracing the power of digital technology.
            </p>
            
            <div className="community-stats" style={{ marginTop: '40px' }}>
              <p>📍 Started in Karnataka</p>
              <p>🤼 1000+ Players Engaged</p>
              <p>🏗️ Building in Public</p>
            </div>
          </div>

          <div className="story-visuals">
            <motion.div 
              className="story-image-container"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '4px solid white'
              }}
            >
              <img 
                src="/assets/kabaddi-match.png" 
                alt="Grassroots Kabaddi Match" 
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '24px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                color: 'white'
              }}>
                <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '4px' }}>Real Passion. Real Kabaddi.</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>Capturing the spirit of the game on the local mat.</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="timeline-section" style={{ marginTop: '100px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '48px' }}>Development Timeline</h2>
          <div className="grid three-col">
            <div className="card">
              <span className="news-date">Q1 2026</span>
              <h3>The Spark</h3>
              <p>Conceptualized the platform after visiting 20+ grassroots tournaments in rural districts.</p>
            </div>
            <div className="card" style={{ borderColor: 'var(--kp-orange)' }}>
              <span className="news-date">Q2 2026</span>
              <h3>Beta Launch</h3>
              <p>Launched the live scoring engine for early testing with local organizers.</p>
            </div>
            <div className="card">
              <span className="news-date">Future</span>
              <h3>National Reach</h3>
              <p>Expanding our digital infrastructure to every Kabaddi-playing state in India.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurStory
