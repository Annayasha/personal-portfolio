
function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-text">
          <p className="welcome-text">
            ✦ WELCOME TO MY PORTFOLIO
          </p>

          <h1>
            Hi, I'm
            <span>Annayasha Mandal</span>
          </h1>

          <p className="role">
            BCA Student&nbsp; | &nbsp;Web Developer
          </p>

          <p className="header-description">
            I enjoy turning creative ideas into beautiful,
            responsive and user-friendly web experiences.
            I am continuously learning modern technologies
            and building projects to improve my development skills.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-btn">
              Let's Connect <span>↗</span>
            </a>

            <a href="#skills" className="secondary-btn">
              Explore My Skills ↓
            </a>
          </div>

          <div className="hero-note">
            <span className="status-dot"></span>
            Always learning. Always building.
          </div>
        </div>

        <div className="profile-card">
          <div className="profile-circle">
            <span>AM</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
