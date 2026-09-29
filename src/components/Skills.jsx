function Skills() {

  const skills = [
    {
      name: "HTML",
      level: "90%"
    },
    {
      name: "CSS",
      level: "85%"
    },
    {
      name: "JavaScript",
      level: "80%"
    },
    {
      name: "React",
      level: "75%"
    },
    {
      name: "Java",
      level: "70%"
    },
    {
      name: "Python",
      level: "70%"
    }
  ];

  return (
    <section id="skills" className="section skills-section">

      <div className="section-title">
        <p>WHAT I KNOW</p>
        <h2>My Skills</h2>
      </div>

      <div className="skills-container">

        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>

            <div className="skill-header">
              <h3>{skill.name}</h3>
              <span>{skill.level}</span>
            </div>

            <div className="progress-background">
              <div
                className="progress-bar"
                style={{ width: skill.level }}
              ></div>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;