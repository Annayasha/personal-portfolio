function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-text">
          <p className="welcome-text">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Annayasha Mandal</span>
          </h1>

          <p className="role">
            BCA Student &nbsp;|&nbsp; Web Developer &nbsp;|&nbsp; Tech Enthusiast
          </p>

          <p className="header-description">
            Passionate about building beautiful, responsive and user-friendly
            web applications using modern technologies.
          </p>

          <a href="#contact" className="primary-btn">
            Contact Me
          </a>
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