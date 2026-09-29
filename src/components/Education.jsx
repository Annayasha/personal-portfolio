function Education() {
  return (
    <section id="education" className="section education-section">

      <div className="section-title">
        <p>MY ACADEMIC JOURNEY</p>
        <h2>Education</h2>
      </div>

      <div className="education-container">

        <div className="education-card">
          <div className="education-icon">🎓</div>

          <div>
            <span className="education-year">2023 - Present</span>

            <h3>Bachelor of Computer Applications</h3>

            <h4>Techno India University</h4>

            <p>
              Currently pursuing BCA with a focus on programming,
              web development, databases and software development.
            </p>
          </div>
        </div>

        <div className="education-card">
          <div className="education-icon">📚</div>

          <div>
            <span className="education-year">Higher Secondary</span>

            <h3>Higher Secondary Education</h3>

            <h4>Commerce Background</h4>

            <p>
              Completed higher secondary education with an interest in
              computer applications, business and technology.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Education;