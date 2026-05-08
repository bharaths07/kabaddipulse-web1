import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { supabase } from '../lib/supabase'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    role: 'Player',
    location: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
    if (error) setError(null)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setError(null)
    
    try {
      const { error: sbError } = await supabase
        .from('early_access_users')
        .insert([
          {
            full_name: formData.name,
            whatsapp: formData.phone,
            role: formData.role,
            city: formData.location
          }
        ])

      if (sbError) throw sbError

      localStorage.setItem('kabaddiPulseWaitlist', JSON.stringify({
        ...formData,
        submittedAt: new Date().toISOString()
      }))
      
      setSubmitted(true)
      setFormData({
        name: '',
        phone: '',
        role: 'Player',
        location: '',
      })
    } catch (err) {
      console.error('Submission error:', err)
      setError('Something went wrong. Please check your internet and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="section" id="contact-us">
      <div className="container">
        <div className="contact-early-layout">
          <motion.div 
            className="contact-early-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow">GET IN TOUCH</span>
            <h3>Join the Future <br />of Kabaddi.</h3>
            <p className="lead" style={{ marginBottom: '32px' }}>
              We&apos;re building a community-driven platform. Be among the first to experience KabaddiPulse.
            </p>
            
            <div className="contact-details">
              <p className="contact-line">
                📧 <a href="mailto:kabaddipulse.official@gmail.com">kabaddipulse.official@gmail.com</a>
              </p>
              <p className="contact-line">
                📸 <a href="https://www.instagram.com/kabaddipulse_official?igsh=MWZobmQyeWpsc2dxZA==" target="_blank" rel="noreferrer">@kabaddipulse_official</a>
              </p>
            </div>

            <div className="community-stats" style={{ marginTop: '48px' }}>
              <p>🏆 50+ Local Tournaments Scheduled</p>
              <p>🤼 1500+ Players Registered Interest</p>
              <p>🌍 Rapidly Expanding across Districts</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="success-msg"
                  >
                    <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
                    <h4>You&apos;re on the List!</h4>
                    <p>Thank you for joining KabaddiPulse. We&apos;ll reach out soon with early access details.</p>
                    <button 
                      type="button" 
                      className="btn btn-secondary" 
                      style={{ marginTop: '20px' }}
                      onClick={() => setSubmitted(false)}
                    >
                      Add Another
                    </button>
                  </motion.div>
                ) : (
                  <motion.div key="form" exit={{ opacity: 0, scale: 0.95 }}>
                    <h4 style={{ marginBottom: '24px', fontFamily: 'Inter', textTransform: 'none', letterSpacing: 0, fontSize: '1.2rem' }}>
                      Register for Early Access
                    </h4>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      <label>
                        Full Name
                        <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. Rahul Kumar" />
                      </label>
                      
                      <label>
                        WhatsApp Number
                        <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 00000 00000" />
                      </label>
                      
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <label>
                          Role
                          <select name="role" value={formData.role} onChange={handleChange}>
                            <option>Player</option>
                            <option>Organizer</option>
                            <option>Fan</option>
                          </select>
                        </label>
                        
                        <label>
                          City / District
                          <input required type="text" name="location" value={formData.location} onChange={handleChange} placeholder="e.g. Mandya" />
                        </label>
                      </div>

                      {error && (
                        <div style={{ color: '#dc2626', fontSize: '0.85rem', fontWeight: 600 }}>
                          ⚠️ {error}
                        </div>
                      )}

                      <button 
                        type="submit" 
                        className="btn btn-primary" 
                        style={{ marginTop: '12px', width: '100%' }}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Joining...' : 'Secure Early Access'}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
