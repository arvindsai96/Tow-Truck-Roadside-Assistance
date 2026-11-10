class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <a class="skip-link" href="#main-content">Skip to content</a>
      <header class="site-header">
        <div class="announcement-bar">
          <div class="container announcement-bar__inner">
            <p><i class="bi bi-lightning-charge-fill" aria-hidden="true"></i> 24/7 roadside help when you need it most</p>
            <p class="announcement-bar__secondary">Fast, dependable service across your area</p>
            <a href="tel:+18005550199"><i class="bi bi-telephone-fill" aria-hidden="true"></i> (800) 555-0199</a>
          </div>
        </div>
        <nav class="site-nav" aria-label="Main navigation">
          <div class="container site-nav__inner">
            <a class="brand" href="index.html" aria-label="RoadRescue home">
              <span class="brand__mark"><i class="bi bi-truck-front-fill" aria-hidden="true"></i></span>
              <span class="brand__text">RoadRescue<span>Roadside assistance</span></span>
            </a>
            <button class="icon-button site-nav__toggle" type="button" aria-label="Open navigation menu" aria-controls="primary-navigation" aria-expanded="false" data-nav-toggle>
              <i class="bi bi-list" aria-hidden="true"></i>
            </button>
            <div class="site-nav__content" id="primary-navigation">
              <ul class="site-nav__list">
                <li class="site-nav__item--dropdown" data-nav-dropdown>
                  <button class="site-nav__home-trigger site-nav__link" type="button" aria-haspopup="true" aria-label="Open Home pages menu" aria-controls="home-menu" aria-expanded="false" data-dropdown-toggle>
                    Home
                    <i class="bi bi-chevron-down" aria-hidden="true"></i>
                  </button>
                  <ul class="site-nav__dropdown" id="home-menu">
                    <li><a class="site-nav__link" href="index.html">Emergency Roadside Support</a></li>
                    <li><a class="site-nav__link" href="home-2.html">Professional Towing Services</a></li>
                  </ul>
                </li>
                <li><a class="site-nav__link" href="about.html">About Us</a></li>
                <li><a class="site-nav__link" href="services.html">Services</a></li>
                <li><a class="site-nav__link" href="coverage.html">Coverage</a></li>
                <li><a class="site-nav__link" href="pricing.html">Pricing</a></li>
                <li><a class="site-nav__link" href="blog.html">Blog</a></li>
                <li><a class="site-nav__link" href="contact.html">Contact</a></li>
              </ul>
              <div class="site-nav__actions">
                <a class="button button--primary" href="dashboard.html">Request Help <i class="bi bi-arrow-up-right icon-directional" aria-hidden="true"></i></a>
                <div class="site-nav__tools" aria-label="Display options">
                  <button class="icon-button site-nav__tool" type="button" aria-label="Switch to dark theme" aria-pressed="false" data-theme-toggle>
                    <i class="bi bi-moon-stars" aria-hidden="true"></i>
                  </button>
                  <button class="icon-button site-nav__tool" type="button" aria-label="Enable right-to-left layout" aria-pressed="false" data-rtl-toggle>RTL</button>
                </div>
                <a class="button button--secondary site-nav__signin" href="login.html">Sign in</a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    `;
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="site-footer__grid">
            <div>
              <a class="brand" href="index.html" aria-label="RoadRescue home">
                <span class="brand__mark"><i class="bi bi-truck-front-fill" aria-hidden="true"></i></span>
                <span class="brand__text">RoadRescue<span>Roadside assistance</span></span>
              </a>
              <p class="site-footer__tagline">Reliable towing and roadside support, available around the clock. Here to help you get moving again.</p>
              <a href="tel:+18005550199"><i class="bi bi-telephone-fill" aria-hidden="true"></i> (800) 555-0199</a>
              <nav class="site-footer__social" aria-label="Social media">
                <a href="https://www.instagram.com/" aria-label="Instagram" title="Instagram"><i class="bi bi-instagram" aria-hidden="true"></i></a>
                <a href="https://www.facebook.com/" aria-label="Facebook" title="Facebook"><i class="bi bi-facebook" aria-hidden="true"></i></a>
                <a href="https://www.youtube.com/" aria-label="YouTube" title="YouTube"><i class="bi bi-youtube" aria-hidden="true"></i></a>
                <a href="https://x.com/" aria-label="X" title="X"><i class="bi bi-twitter-x" aria-hidden="true"></i></a>
              </nav>
            </div>
            <div>
              <h2 class="site-footer__title">Explore</h2>
              <ul class="site-footer__links">
                <li><a href="about.html">About us</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="coverage.html">Coverage</a></li>
                <li><a href="pricing.html">Pricing</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
            <div>
              <h2 class="site-footer__title">Resources</h2>
              <ul class="site-footer__links">
                <li><a href="login.html">Customer login</a></li>
                <li><a href="request-assistance.html">Request assistance</a></li>
                <li><a href="admin-dashboard.html">Admin preview (local demo)</a></li>
                <li><a href="coming-soon.html">Coming Soon page template</a></li>
                <li><a href="maintenance.html">Maintenance page template</a></li>
              </ul>
            </div>
            <div>
              <h2 class="site-footer__title">Always on call</h2>
              <p>Emergency roadside assistance<br>Available 24 hours a day, 7 days a week.</p>
              <div class="site-footer__actions">
                <a class="button button--primary" href="tel:+18005550199">Call for help</a>
              </div>
            </div>
          </div>
          <div class="site-footer__bottom">
            <p>&copy; <span data-current-year></span> RoadRescue. All rights reserved.</p>
            <nav class="site-footer__legal" aria-label="Legal and security information">
              <a href="privacy.html">Privacy Policy</a>
              <a href="terms.html">Terms of Service</a>
              <a href="security.html">Security</a>
            </nav>
          </div>
        </div>
      </footer>
    `;
  }
}

if (!customElements.get("site-header")) {
  customElements.define("site-header", SiteHeader);
}

if (!customElements.get("site-footer")) {
  customElements.define("site-footer", SiteFooter);
}
