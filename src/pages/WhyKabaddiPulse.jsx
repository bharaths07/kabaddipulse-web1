import { motion } from 'framer-motion'

function WhyKabaddiPulse() {
  const problemCards = [
    {
      icon: '🔍',
      title: 'Talent Stays Hidden',
      text: 'Skilled players in rural areas often lack the platform to showcase their stats and achievements beyond their local community.',
    },
    {
      icon: '📝',
      title: 'Manual Management',
      text: 'Tournaments are still managed using paper sheets and WhatsApp, leading to confusion and lack of historical data.',
    },
    {
      icon: '📊',
      title: 'Lack of Real-time Stats',
      text: 'Fans and players have no way to track live scores or deep player performance metrics during a match.',
    },
    {
      icon: '🏗️',
      title: 'Digital Divide',
      text: 'Professional tools exist for elite leagues, but grassroots Kabaddi is left behind without modern infrastructure.',
    },
  ]

  const solutionCards = [
    { icon: '📡', title: 'Live Scoring', text: 'Real-time score updates accessible to anyone, anywhere.' },
    { icon: '🏆', title: 'Tournament Suite', text: 'End-to-end digital management for fixtures, brackets, and rules.' },
    { icon: '👤', title: 'Digital Identities', text: 'Every player gets a profile with career stats and achievements.' },
    { icon: '🤝', title: 'Community First', text: 'A unified platform connecting organizers, players, and fans.' },
  ]

  return (
    <section className="section" id="why-kabaddipulse">
      <div className="container">
        <span className="eyebrow" style={{ textAlign: 'center' }}>OUR MISSION</span>
        <h2 style={{ marginBottom: '24px' }}>Kabaddi Deserves More.</h2>
        <p className="section-text lead">
          We are bridging the gap between talent and visibility by providing professional-grade digital tools to the grassroots Kabaddi community.
        </p>

        <div className="grid three-col" style={{ marginTop: '60px' }}>
          {problemCards.map((problem, index) => (
            <motion.article 
              className="card" 
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{problem.icon}</div>
              <h3>{problem.title}</h3>
              <p>{problem.text}</p>
            </motion.article>
          ))}
        </div>

        <div className="solution-highlight" style={{ 
          marginTop: '100px', 
          padding: '60px', 
          background: 'var(--kp-charcoal)', 
          borderRadius: '32px',
          color: 'white'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ color: 'white' }}>The KabaddiPulse Solution</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>A complete ecosystem for the modern game.</p>
          </div>

          <div className="grid three-col">
            {solutionCards.map((solution) => (
              <div key={solution.title} style={{ textAlign: 'left' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  background: 'var(--kp-orange)', 
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  marginBottom: '20px'
                }}>
                  {solution.icon}
                </div>
                <h4 style={{ color: 'white', marginBottom: '8px' }}>{solution.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)' }}>{solution.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyKabaddiPulse
