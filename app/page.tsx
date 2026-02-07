import Image from "next/image";

export default function Home() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/*name of website*/}
  <title>Document</title>
  {/*import css file*/}
  <link rel="stylesheet" href="style.css" />
  {/*import js file*/}
  <nav className="navbar">
    <div className="navbar__container">
      <a href="#" id="navbar__logo">
        PulseAsia
      </a>
      <ul className="navbar__menu">
        <li className="navbar__item">
          <a
            href="/pages/resourcesPage/resources.html"
            className="navbar__links"
          >
            Resource Hub
          </a>
        </li>
        <li className="navbar__item">
          <a href="/pages/aboutus/aboutus.html" className="navbar__links">
            About Us
          </a>
        </li>
        <li className="navbar__item">
          <a
            href="/pages/topthreeresources/topthreeresources.html"
            className="navbar__links"
          >
            Top Three Resources
          </a>
        </li>
        <li className="navbar__item">
          <a
            href="/pages/suggestions/suggestions.html"
            className="navbar__links"
          >
            Suggestions
          </a>
        </li>
        <li className="navbar__item">
          <a href="/pages/references/references.html" className="navbar__links">
            References
          </a>
        </li>
        <li className="navbar__item">
          <a href="/pages/interactiveMap/map.html" className="navbar__links">
            Interactive Maps
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <nav className="main">
    <div className="main__heroContent">
      <div className="main__heroWords">
        <h1>
          Find <spar style={{ color: "#FFC15E" }}>Support</spar>
          <br />
          Explore <spar style={{ color: "#FFC15E" }}>Culture</spar>
          <br />
          Build <spar style={{ color: "#FFC15E" }}>Community</spar>
        </h1>
        <p>
          Our Organization is committed to supporting Asian American immigrants
          across several
          <br />
          different countries in adjusting to the American life in the Pacific
          Northwest
        </p>
        {/* <button class="main__btn"><a href="/">Learn more</a></button> */}
        <p className="scrollArrow">Keep Scrolling ↓</p>
      </div>
    </div>
  </nav>
  {/* Hero Banner Section */}
  <section className="hero-banner">
    <div className="hero-banner-bg">
      <div className="hero-banner-content">
        <h1 className="hero-banner-title">PulseAsia is Built to Help</h1>
        <p className="hero-banner-subtitle">
          Explore our resource hub to find your next step
        </p>
        <a
          href="/pages/resourcesPage/resources.html"
          className="hero-banner-btn"
        >
          Explore More Resources
        </a>
      </div>
    </div>
  </section>
  {/* Testimonial Section */}
  <section className="testimonial-section">
    <div className="testimonial-arrow-circle left">
      <svg width={32} height={32} viewBox="0 0 32 32">
        <polyline
          points="20,8 12,16 20,24"
          fill="none"
          stroke="#fff"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <div className="testimonial-card">
      <h3 className="testimonial-heading">
        COMMITTED TO SUPPORTING ASIAN AMERICAN IMMIGRANT LIFE IN THE PACIFIC
        NORTHWEST
      </h3>
      <div className="testimonial-image">
        <img src="/images/manstudying.jpg" alt="Testimonial" />
      </div>
      <div className="testimonial-content">
        <p>
          “When I first moved to Seattle from the Philippines, I felt lost. By
          using PulseAsia’s Community Resource Hub and their excellent member
          service, I was able to find support with my business visa
          applications! Now, me and my family own two restaurant locations in
          Tacoma and downtown Seattle. PulseAsia’s accessible structure to
          finding resources helped me find a home far away from home!”
        </p>
        <p className="testimonial-author">
          - Jomari Dela Cruz (Father and Business Owner)
        </p>
      </div>
    </div>
    <div className="testimonial-arrow-circle right">
      <svg width={32} height={32} viewBox="0 0 32 32">
        <polyline
          points="12,8 20,16 12,24"
          fill="none"
          stroke="#fff"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </section>
  {/* Community Section */}
  <section className="community-section">
    <div className="community-container">
      <div className="community-text">
        <h2>
          Your
          <br />
          knowledge,
          <br />
          Our
          <br />
          community
        </h2>
        <p>
          Help us connect our community by adding programs,
          <br />
          events, or services you know about.
        </p>
        <a href="/pages/suggestions/suggestions.html" className="community-btn">
          Share Now
        </a>
      </div>
      <div className="community-image">
        <img src="/images/indiabeauty.jpg" alt="Community" />
      </div>
    </div>
  </section>
  <footer className="site-footer">
    <div className="footer-content">
      {/* Left column */}
      <div className="footer-left">
        <a href="mailto:moodyxoreo@gmail.com" className="contact-btn">
          Contact Us:
        </a>
        <p>Email: info@pulseasia.com</p>
        <p>Phone: 425-471-4324</p>
        <p className="footer-created">
          Created by students of:
          <br />
          Lake Washington High School
          <br />
          12033 NE 80th St, Kirkland, WA 98033
        </p>
        <p className="footer-copyright">
          ©2025 Pulse Asia. All Rights Reserved.
        </p>
      </div>
      {/* Right column */}
      <div className="footer-right">
        <nav className="footer-links">
          <a href="/pages/resourcesPage/resources.html">Resource Hub</a>
          <a href="/pages/aboutus/aboutus.html">About Us</a>
          <a href="/pages/suggestions/suggestions.html">Suggestions</a>
        </nav>
        <img
          src="/images/PULSEASIALOGO.png"
          alt="Pulse Asia Logo"
          className="footer-logo"
        />
      </div>
    </div>
  </footer>
</>
  );
}
