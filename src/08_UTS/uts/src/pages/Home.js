import React from "react";

export default function Home() {
  return (
    <main>
      <section className="tm-welcome">
        <div className="row">
          <div className="col-12">
            <h2 className="tm-section-header">Welcome to New Vision</h2>
          </div>
        </div>

        <div className="row tm-welcome-row">
          <article className="col-lg-6 tm-media">
            <img
              src="img/img-3x2-01.jpg"
              alt="Welcome image"
              className="img-fluid tm-media-img"
            />
            <div className="tm-media-body">
              <a href="#" className="tm-article-link">
                <h3 className="tm-article-title text-uppercase">
                  Best collection
                </h3>
              </a>
              <p>
                Aliquam purus arcu, congue a gravida ac, facilisis vel erat.
                Maecenas pretium sem.
              </p>
            </div>
          </article>
          <article className="col-lg-6 tm-media">
            <img
              src="img/img-3x2-02.jpg"
              alt="Welcome image"
              className="img-fluid tm-media-img"
            />
            <div className="tm-media-body">
              <a href="#" className="tm-article-link">
                <h3 className="tm-article-title text-uppercase">
                  New Design for your website
                </h3>
              </a>
              <p>
                Aliquam purus arcu, congue a gravida ac, facilisis vel erat.
                Maecenas pretium sem at nisl malesuada, quis.
              </p>
            </div>
          </article>
          <article className="col-lg-6 tm-media">
            <img
              src="img/img-3x2-03.jpg"
              alt="Welcome image"
              className="img-fluid tm-media-img"
            />
            <div className="tm-media-body">
              <a href="#" className="tm-article-link">
                <h3 className="tm-article-title text-uppercase">
                  Most unique idea ever made
                </h3>
              </a>
              <p>
                Aliquam purus arcu, congue a gravida ac, facilisis vel erat.
                Maecenas. <span className="tm-hover-color">Hover #09F</span>
              </p>
            </div>
          </article>
          <article className="col-lg-6 tm-media">
            <img
              src="img/img-3x2-04.jpg"
              alt="Welcome image"
              className="img-fluid tm-media-img"
            />
            <div className="tm-media-body">
              <a href="#" className="tm-article-link">
                <h3 className="tm-article-title text-uppercase">
                  Simple touch
                </h3>
              </a>
              <p>
                Please tell your friends about TemplateMo website. Thank you.
                Title / Text #666
              </p>
            </div>
          </article>
        </div>

        <div className="row tm-welcome-row-2">
          <div className="col-lg-4 tm-dotted-box-container">
            <article className="tm-dotted-box">
              <i className="fas fa-3x fa-binoculars tm-article-icon"></i>
              <h3 className="tm-article-title">Template Usage</h3>
              <p className="tm-article-text">
                You can feel free to edit and use New Vision template for your
                commercial websites. Title color is #333
              </p>
              <a className="tm-btn tm-btn-rounded tm-article-link" href="#">
                More Details
              </a>
            </article>
          </div>
          <div className="col-lg-4 tm-dotted-box-container">
            <article className="tm-dotted-box">
              <i className="fas fa-3x fa-microscope tm-article-icon"></i>
              <h3 className="tm-article-title">New Vision</h3>
              <p className="tm-article-text">
                <a
                  rel="nofollow"
                  target="_parent"
                  href="https://templatemo.com/tm-542-new-vision"
                >
                  New Vision
                </a>
                comes with 4 different HTML pages and provided free of charge by
                TemplateMo. You can add more pages if you need. Text color is
                #666
              </p>
            </article>
          </div>
          <div className="col-lg-4 tm-dotted-box-container">
            <article className="tm-dotted-box">
              <i className="fas fa-3x fa-glasses tm-article-icon"></i>
              <h3 className="tm-article-title">Download Sites</h3>
              <p className="tm-article-text">
                Do not re-distribute our template ZIP file on your website. Or
                contact us first. Button color is #C99
              </p>
              <a className="tm-btn tm-article-link" href="#">
                Read More...
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="tm-featured">
        <div className="row">
          <div className="col-12">
            <h2 className="tm-section-header tm-section-header-small">
              Featured Carousel Items
            </h2>
          </div>
        </div>
        <div className="grid tm-carousel">
          <figure className="effect-honey">
            {/* <img src="img/gallery-item-01.jpg" alt="Featured Item"> */}
            <figcaption>
              <h4>
                <i>
                  <span>Best</span> HTML Template
                </i>
              </h4>
            </figcaption>
          </figure>
          <figure className="effect-honey">
            {/* <img src="img/gallery-item-02.jpg" alt="Featured Item"> */}
            <figcaption>
              <h4>
                <i>
                  <span>Top</span> CSS Theme
                </i>
              </h4>
            </figcaption>
          </figure>
          <figure className="effect-honey">
            {/* <img src="img/gallery-item-03.jpg" alt="Featured Item"> */}
            <figcaption>
              <h4>
                <i>
                  <span>Best</span> HTML Template
                </i>
              </h4>
            </figcaption>
          </figure>
          <figure className="effect-honey">
            {/* <img src="img/gallery-item-04.jpg" alt="Featured Item"> */}
            <figcaption>
              <h4>
                <i>
                  <span>Great</span> Web Theme
                </i>
              </h4>
            </figcaption>
          </figure>
          <figure className="effect-honey">
            {/* <img src="img/gallery-item-05.jpg" alt="Featured Item"> */}
            <figcaption>
              <h4>
                <i>
                  <span>Best</span> HTML Collection
                </i>
              </h4>
            </figcaption>
          </figure>
          <figure className="effect-honey">
            {/* <img src="img/gallery-item-06.jpg" alt="Featured Item"> */}
            <figcaption>
              <h4>
                <i>
                  <span>Max</span> CSS Layout
                </i>
              </h4>
            </figcaption>
          </figure>
          <figure className="effect-honey">
            {/* <img src="img/gallery-item-07.jpg" alt="Featured Item"> */}
            <figcaption>
              <h4>
                <i>
                  <span>Best</span> HTML Layout
                </i>
              </h4>
            </figcaption>
          </figure>
          <figure className="effect-honey">
            {/* <img src="img/gallery-item-08.jpg" alt="Featured Item"> */}
            <figcaption>
              <h4>
                <i>
                  <span>Best</span> CSS Template
                </i>
              </h4>
            </figcaption>
          </figure>
        </div>
      </section>

      <footer>
        Copyright &copy; 2020 New Vision - Design:
        <a
          href="https://templatemo.com"
          rel="sponsored"
          target="_parent"
          title="css templates"
        >
          TemplateMo
        </a>
      </footer>
    </main>
  );
}
