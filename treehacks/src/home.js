import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>test</title>
        <meta property="og:title" content="temp template" />
      </Helmet>
      <div className="home-navbar">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <div className="home-branding">
            <img
              src="/playground_assets/screen%20shot%202023-02-19%20at%207.40.23%20am-200h.png"
              alt="image"
              className="home-image"
            />
            <span className="home-text">The Health Nest</span>
          </div>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-nav"
          >
            <nav className="home-links">
              <button className="home-button button">
                <span>About</span>
              </button>
              <button className="home-button1 button">
                <span>Contact</span>
              </button>
              <button className="home-button2 button">Join Now</button>
            </nav>
          </div>
          <div data-thq="thq-temp-nav" className="home-temp-nav">
            <img
              alt="image"
              src="/playground_assets/group%202084%5B1%5D.svg"
              className="home-temptemp"
            />
          </div>
          <div data-thq="thq-mobile-nav" className="home-mobile-nav">
            <div className="home-top">
              <div className="home-branding1">
                <span className="home-text3">temp</span>
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M128 128h768v768h-768z"></path>
                </svg>
                <span className="home-text4">temp</span>
              </div>
              <div data-thq="thq-close-nav" className="home-nav-close">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                </svg>
              </div>
            </div>
            <nav className="home-links1">
              <button className="home-button3 button">
                <span>Our offers</span>
              </button>
              <button className="home-button4 button">
                <span>Get a fast quote</span>
              </button>
              <button className="home-button5 button">nav</button>
            </nav>
            <div className="home-social-bar">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon10">
              </svg>
              <svg viewBox="0 0 1024 1024" className="home-icon12">
              </svg>
            </div>
          </div>
        </header>
      </div>
      <header className="home-hero">
        <div className="home-content">
          <h1 className="home-title">
            Sharing wellness, one connection at a time.
          </h1>
          <span className="home-description">
            Designed for individuals with chronic health problems, The Health
            Nest offers a supportive network of individuals with similar health
            conditions, providing emotional support, encouragement, and helpful
            tips for managing their health.
          </span>
          <img
            alt="image"
            src="/playground_assets/line-300w.png"
            className="home-image1"
          />
        </div>
        <div className="home-container1">
          <div className="home-image2">
            <img
              src="/playground_assets/screen%20shot%202023-02-19%20at%207.45.40%20am-500h.png"
              alt="image"
              className="home-image3"
            />
          </div>
        </div>
      </header>
      <section className="home-mission">
        <h1 className="home-text7">
          Living with a chronic health condition can be challenging, its
          difficult to find people who truly understand your experience. In this
          platform, users can join groups, participate in discussions with
          others who have the same condition, share experiences, and offer each
          other advice and tips.
        </h1>
        <button className="button home-button6">
          <span className="home-text8">Learn more about our story</span>
        </button>
      </section>
      <div>
        <
          html={`<style>
    .partner-container:hover .partner-image{
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(75deg) brightness(101%) contrast(102%);
    }
</style>`}
        ></>
      </div>
    </div>
  )
}

export default Home
