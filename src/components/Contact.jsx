import React from 'react'
import Title from '../components/Title'
import './Contact.css'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaYoutube, FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <Title title="Contact Me" className='title' />
            <div className="contact-container">
                <div className="contact-info">
                    <h3>Get in Touch</h3>
                    <p><FaEnvelope className="contact-icon" />yaseenyt151@gmail.com</p>
                    <p><FaPhone className="contact-icon" /> +20 1200873693</p>
                    <p><FaMapMarkerAlt className="contact-icon" /> Egypt, Giza</p>
                    <p><FaYoutube className="contact-icon" /> <a href="https://www.youtube.com/@yaseen-Developer" target="_blank" rel="noopener noreferrer">YouTube</a></p>
                    <p><FaWhatsapp className="contact-icon" /> <a href="https://wa.me/201200873693" target="_blank" rel="noopener noreferrer">WhatsApp</a></p>
                </div>
                <div className="contact-form-wrapper">
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="you@example.com" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" placeholder="Your Message" required />
                        </div>
                        <button type="submit" className="submit-btn">
                            <FaPaperPlane style={{ marginRight: 8 }} /> Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact