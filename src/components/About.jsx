function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-title">
        <p>GET TO KNOW ME</p>
        <h2>About Me</h2>
      </div>

      <div className="about-container">

        <div className="about-image">
          <div className="about-box">
            <span>&lt;/&gt;</span>
          </div>
        </div>

        <div className="about-content">
          <h3>I'm a passionate learner and developer.</h3>

          <p>
            I am currently pursuing my Bachelor of Computer Applications
            (BCA). I am passionate about technology, web development and
            creating modern digital experiences.
          </p>

          <p>
            I enjoy learning new technologies and developing projects that
            combine creativity with programming. My goal is to become a
            skilled software developer and continuously improve my technical
            and communication skills.
          </p>

          <div className="about-info">

            <div>
              <strong>Name:</strong>
              <span>Annayasha</span>
            </div>

            <div>
              <strong>Degree:</strong>
              <span>BCA</span>
            </div>

            <div>
              <strong>Location:</strong>
              <span>Kolkata, India</span>
            </div>

            <div>
              <strong>Interest:</strong>
              <span>Web Development</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;