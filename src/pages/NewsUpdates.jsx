import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function NewsUpdates() {
  const tickerItems = [
    { label: 'KCL 2026', text: 'Rohtak Royals reach final after defeating Panipat Panthers 43-36' },
    { label: 'NATIONALS', text: 'Indian Railways secure 72nd Senior Men\'s National title' },
    { label: 'PKL 11', text: 'Haryana Steelers dominate playoffs with strong defensive performance' },
    { label: 'WORLD CUP', text: 'India retains both Men\'s and Women\'s World Cup titles' },
  ]

  const featuredNews = {
    image: '/assets/rohtak-royals.png',
    title: 'ROHTAK ROYALS REACH KCL 2026 FINAL',
    description: 'Rohtak Royals, led by Kabaddi veteran Sandeep Narwal, secured their place in the Kabaddi Champions League 2026 final after defeating Panipat Panthers 43-36 in a high-intensity clash.',
    extraLine: 'Former Indian defender Surender Nada continues to guide the Royals as head coach.',
    date: 'May 2026',
    tag: 'KCL 2026'
  }

  const nationalNews = [
    {
      image: '/assets/news-trophy.png',
      title: 'INDIAN RAILWAYS WIN 72ND SENIOR MEN’S NATIONALS',
      description: 'Indian Railways captured the 72nd Senior Men’s National Kabaddi Championship title with a dominant victory over Maharashtra, finishing the tournament 18 points ahead.',
      date: 'May 2026',
      tag: 'National Championship'
    },
    {
      image: '/assets/womens-nationals.png',
      title: 'WOMEN’S NATIONAL KABADDI CHAMPIONSHIP UNDERWAY',
      description: 'The 72nd Women’s Senior National Kabaddi Championship is currently in progress, with Indian Railways and several top state teams securing strong opening performances.',
      date: 'May 2026',
      tag: 'Women’s Kabaddi'
    }
  ]

  const internationalNews = [
    {
      image: '/assets/kabaddi-match.png',
      title: 'INDIA DOMINATES KABADDI WORLD CUP 2025',
      description: 'India created history by winning both the Men’s and Women’s Kabaddi World Cup titles in 2025, while also setting a Guinness World Record during the tournament.',
      date: '2025',
      tag: 'International'
    },
    {
      image: '/assets/haryana-action.jpg',
      title: 'HARYANA STEELERS IMPRESS IN PKL 11 PLAYOFFS',
      description: 'Haryana Steelers continue to emerge as one of the strongest teams in Pro Kabaddi League Season 11 following dominant playoff performances.',
      date: 'Recent Update',
      tag: 'PKL 11'
    },
    {
      image: '/assets/kabaddi-match.png',
      title: 'WORLD KABADDI DAY 2026 CELEBRATED GLOBALLY',
      description: 'World Kabaddi Day 2026 was celebrated under the theme “Stronger Together,” highlighting the rapid global growth of the sport.',
      date: '2026',
      tag: 'World Kabaddi'
    }
  ]

  const platformUpdates = [
    {
      image: '/assets/news-testing.png',
      title: 'UNDER TESTING',
      description: 'KabaddiPulse is currently under active testing as we build the next-generation platform for grassroots Kabaddi tournaments, live scoring, and player recognition.',
      shortDesc: 'We are testing core systems including live scoring, tournament management, player profiles, and real-time updates to deliver a smooth experience before launch.',
      date: 'April 2026',
      tag: 'DEVELOPMENT'
    },
    {
      image: '/assets/news-launch.png',
      title: 'KABADDIPULSE LAUNCHING SOON',
      description: 'The future of grassroots Kabaddi is almost here.',
      shortDesc: 'KabaddiPulse will soon launch with live scoring, tournament management, player rankings, and community-driven features built for players, organizers, and fans across India.',
      date: 'Coming Soon',
      tag: 'ANNOUNCEMENT'
    },
    {
      image: '/updates/update-login.png',
      title: 'EARLY ACCESS NOW OPEN',
      description: 'Players, organizers, and Kabaddi fans can now join the KabaddiPulse early access community.',
      shortDesc: 'Be among the first users to experience live match tracking, player stats, tournament updates, and upcoming KabaddiPulse features before public launch.',
      date: 'April 2026',
      tag: 'COMMUNITY'
    },
    {
      image: '/assets/kabaddi-match.png',
      title: 'BUILDING FOR GRASSROOTS KABADDI',
      description: 'KabaddiPulse is being built to give local players and tournaments the digital recognition they deserve.',
      shortDesc: 'From village tournaments to district competitions, our mission is to modernize grassroots Kabaddi with technology, visibility, and community support.',
      date: '2026',
      tag: 'MISSION'
    }
  ]

  return (
    <div className="news-page-wrapper">
      <div className="news-ticker-container">
        <div className="news-ticker-content">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div className="news-ticker-item" key={idx}>
              <span>{item.label}:</span> {item.text}
            </div>
          ))}
        </div>
      </div>

      <section className="section" id="news-updates">
        <div className="container">
          <div className="news-header-block">
            <Link to="/" className="back-link">
              &larr; Back to Home
            </Link>
            <h2 className="news-header-title">
              <span role="img" aria-label="news icon">📰</span> Newsroom
            </h2>
            <p className="news-header-subtitle">
              Your central hub for the latest from the Kabaddi ecosystem and KabaddiPulse platform updates.
            </p>
          </div>

          {/* Featured News */}
          <div className="news-section-group">
            <div className="news-section-header">
              <h4>FEATURED NEWS</h4>
            </div>
            <motion.div 
              className="featured-news-card"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="featured-image-box">
                <img src={featuredNews.image} alt={featuredNews.title} />
              </div>
              <div className="featured-content-box">
                <span className="news-tag">{featuredNews.tag}</span>
                <h3>{featuredNews.title}</h3>
                <span className="news-wide-date">{featuredNews.date}</span>
                <p className="news-wide-desc" style={{ fontSize: '1.1rem', marginBottom: '12px' }}>{featuredNews.description}</p>
                <p className="news-wide-desc" style={{ color: 'rgba(255,255,255,0.7)', fontStyle: 'italic' }}>{featuredNews.extraLine}</p>
                <Link to="/contact" className="btn btn-primary" style={{ marginTop: '24px', alignSelf: 'flex-start' }}>
                  Read Full Story
                </Link>
              </div>
            </motion.div>
          </div>

          {/* National Kabaddi */}
          <div className="news-section-group">
            <div className="news-section-header">
              <h4>NATIONAL KABADDI</h4>
            </div>
            <div className="news-list">
              {nationalNews.map((item, index) => (
                <motion.article 
                  className="news-wide-card" 
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="news-image-box">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="news-wide-body">
                    <div className="news-meta-top">
                      <span className="news-tag">{item.tag}</span>
                      <span className="news-wide-date">{item.date}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p className="news-wide-desc">{item.description}</p>
                    <Link to="/contact" className="news-read-more">
                      Read More &rarr;
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* International & PKL */}
          <div className="news-section-group">
            <div className="news-section-header">
              <h4>INTERNATIONAL & PKL</h4>
            </div>
            <div className="news-grid-group">
              {internationalNews.map((item, index) => (
                <motion.article 
                  className="news-small-card" 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="news-image-box">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="news-wide-body">
                    <div className="news-meta-top">
                      <span className="news-tag">{item.tag}</span>
                      <span className="news-wide-date">{item.date}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p className="news-wide-desc">{item.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* KabaddiPulse Updates */}
          <div className="news-section-group">
            <div className="news-section-header" style={{ borderColor: 'var(--kp-orange)' }}>
              <h4 style={{ color: 'var(--kp-orange)' }}>KABADDIPULSE UPDATES</h4>
            </div>
            <div className="news-grid-group">
              {platformUpdates.map((item, index) => (
                <motion.article 
                  className="news-small-card" 
                  key={item.title}
                  style={{ borderTop: '4px solid var(--kp-orange)' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="news-image-box">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="news-wide-body">
                    <div className="news-meta-top">
                      <span className="news-tag" style={{ background: 'var(--kp-orange)', color: 'white' }}>{item.tag}</span>
                      <span className="news-wide-date">{item.date}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p className="news-wide-desc" style={{ fontWeight: 700, marginBottom: '8px' }}>{item.description}</p>
                    <p className="news-wide-desc">{item.shortDesc}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default NewsUpdates
