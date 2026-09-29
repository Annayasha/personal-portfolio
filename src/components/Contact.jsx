function Contact() {
  return (
    <section id="contact" className="section contact-section">

      <div className="section-title">
        <p>LET'S CONNECT</p>
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <h3>Let's work together.</h3>

          <p>
            I'm always interested in learning new things, discussing
            technology and working on exciting projects.
          </p>

          <div className="contact-item">
            <span className="contact-icon">📧</span>

            <div>
              <strong>Email</strong>
              <p>yourmail@example.com</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">📍</span>

            <div>
              <strong>Location</strong>
              <p>Kolkata, India</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">💻</span>

            <div>
              <strong>GitHub</strong>
              <p>github.com/yourusername</p>
            </div>
          </div>

        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            placeholder="Your Message"
            rows="6"
          ></textarea>

          <button type="submit" className="primary-btn">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;