import React from "react";

function References() {
  return (
    <div>
      {/* Header / Navbar */}
      <header className="site-header">
        <div className="navbar__container">
          <a href="/index.html" id="navbar__logo">PulseAsia</a>

          <ul className="navbar__menu">
            <li><a href="../aboutus/aboutus.html">About Us</a></li>
            <li><a href="../resourcesPage/resources.html">Resource Hub</a></li>
            <li><a href="../topthreeresources/topthreeresources.html">Top Three Resources</a></li>
            <li><a href="../suggestions/suggestions.html">Suggestions</a></li>
            <li><a href="../References/references.html">References</a></li>
            <li><a href="../interactiveMap/map.html">Interactive Maps</a></li>
          </ul>
        </div>
      </header>

      {/* Main Content */}
      <div className="resource-hub">
        {/* References Section */}
        <section className="references-section">
          <div className="references-background">
            <h1 className="references-title">References</h1>
          </div>

          <div className="pdf-card">
            <a
              href="https://drive.google.com/drive/folders/1TxwoZv0ZYbOjhMuDWQwitYYApvCmMpYv?usp=sharing"
              className="pdf-button"
            >
              Check PDF
            </a>
            <p className="pdf-label">Work Log + Copyright Checklist</p>
          </div>
        </section>

        {/* Code Stack Section */}
        <section className="code-stack-section">
          <div className="code-stack-background">
            <h2 className="code-stack-title">
              Code Stack + Additional Information
            </h2>

            <p className="code-stack-description">
              <span className="description-text">
                This website was developed by our team using HTML, CSS, and Javascript,
                with all functionality (such as the Resource Hub directory) done from
                scratch. We utilized GitHub for collaborative development and version
                control. While the current website is simple but fully functional, we
                plan to enhance the site after qualifiers by implementing TailwindCSS
                for streamlined styling, ReactJS for component-based design, and Next.js
                for rendering and routing. Additionally, for form submissions, Google
                Apps Script was used to handle form submissions by securely logging
                user-submitted resource suggestions into a Google Sheets Spreadsheet.
                Link to Google Excel:
              </span>{" "}
              <a
                href="https://docs.google.com/spreadsheets/d/1wcLU47DYFTF5lhXiK75I9kZtlluCfDr3ORWhCewXboM/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="spreadsheet-link"
              >
                Link
              </a>
            </p>
          </div>
        </section>

        {/* Image Links Section */}
        <section className="image-links-section">
          <div className="image-links-background">
            <h2 className="image-links-title">Image Links (click them)</h2>

            <p className="image-sources">
              <a href="https://images.unsplash.com/photo-1529180979161-06b8b6d6f2be?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" target="_blank" rel="noopener noreferrer" className="image-link">
                aboutus-banner.jpg<br />
              </a>
              <a href="https://www.pexels.com/photo/street-protest-with-diverse-group-of-people-outdoors-35142093/" target="_blank" rel="noopener noreferrer" className="image-link">
                aboutus-community.jpg<br />
              </a>
              <a href="https://www.pexels.com/photo/photo-of-a-grandfather-carrying-her-granddaughter-8298434/" target="_blank" rel="noopener noreferrer" className="image-link">
                aboutus-compassion.jpg<br />
              </a>
              <a href="https://unsplash.com/photos/celebration-of-chinese-lantern-festival-BHwczUxb0hE" target="_blank" rel="noopener noreferrer" className="image-link">
                aboutus-culture.jpg<br />
              </a>
              <a href="https://unsplash.com/photos/a-happy-indian-family-GlDx359cBus" target="_blank" rel="noopener noreferrer" className="image-link">
                aboutus-title.jpg<br />
              </a>
              <a href="https://www.freepik.com/free-photo/old-senior-asian-friends-retired-people-hapiness-positive-laugh-smile-conversation-together-living-room-nursing-home-seniors-participating-group-activities-adult-daycare-center_27949393.htm" target="_blank" rel="noopener noreferrer" className="image-link">
                homeimage.jpg<br />
              </a>
              <a href="https://www.pexels.com/photo/arched-entrance-to-safdarjung-tomb-1007431/" target="_blank" rel="noopener noreferrer" className="image-link">
                india.jpg<br />
              </a>
              <a href="https://www.pexels.com/photo/festival-celebration-with-traditional-diyas-29422092/" target="_blank" rel="noopener noreferrer" className="image-link">
                indiabeauty.jpg<br />
              </a>
              <a href="https://www.canva.com/photos/free/" target="_blank" rel="noopener noreferrer" className="image-link">
                manstudying.jpg<br />
              </a>
              <a href="https://www.freepik.com/free-photo/middle-age-friends-having-fun_21249427.htm" target="_blank" rel="noopener noreferrer" className="image-link">
                middle-age-friends-havingfun<br />
              </a>
              <a href="https://www.freepik.com/free-photo/landscape-with-sunset-yixing_1283944.htm" target="_blank" rel="noopener noreferrer" className="image-link">
                sunsetpagoda.png
              </a>
            </p>

            <h3 className="licenses-heading">
              Licenses Backing Up the Images
            </h3>

            <p className="licenses-description">
              All images used on this website are sourced from platforms that provide
              free-to-use media with flexible licenses:
              <br />
              Unsplash – free for commercial and non-commercial use without attribution
              <br />
              Pexels – free to use, modify, and distribute
              <br />
              Freepik – used in compliance with Freepik’s license
              <br />
              Canva – assets used under Canva’s free media license
              <br />
              By following these licenses, we ensure that all images on our site are
              legally compliant.
            </p>

            <p className="resources-note">
              All resources are linked on the resource hub on the resource cards.
            </p>
          </div>
        </section>

        {/* Research Section */}
        <section className="research-section">
          <div className="research-background">
            <h2 className="research-title">Research Links:</h2>
            <p className="licenses-description">
              Research Links are all found by clicking resource cards on the Resource
              Hub Page.
            </p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-left">
            <a href="mailto:ali.samina.star@gmail.com" className="contact-btn">
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

          <div className="footer-right">
            <nav className="footer-links">
              <a href="/aboutus/aboutus.html">About Us</a>
              <a href="/resourcesPage/resources.html">Resource Hub</a>
              <a href="/topthreeresources/topthreeresources.html">Top Three Resources</a>
              <a href="/suggestions/suggestions.html">Suggestions</a>
              <a href="/References/references.html">References</a>
              <a href="/interactiveMap/map.html">Interactive Maps</a>
            </nav>

            <img
              src="/images/PULSEASIALOGO.png"
              alt="Pulse Asia Logo"
              className="footer-logo"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default References;