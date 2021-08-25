import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const HeroSlider = () => {
  return (
    <div className="hero-area mb-30">
      <div className="slider-container">
        <div className="slider-style-3">
        <Carousel autoPlay={true} interval={5000} showStatus={false} showThumbs={false}>
          <div className="hero-slider-item slider-bg-6">
            <div className="d-flex flex-column justify-content-center align-items-start h-100">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-7">
                    <div className="slider-content" style={{textAlign: "left"}}>
                      <p>Exclusive Offer -60% Off This Week </p>
                      <h1>Outdoor Chair 2018</h1>
                      <div className="image d-inline-block">
                        <img
                          src="../assets/images/icons/slider-icon.png"
                          alt=""
                        />
                      </div>
                      <p>
                        FLY Lounge is a series of beautiful and beautiful
                        seating furniture from Danish & Tradition designed by
                        SPACE Copenhagen.
                      </p>
                      <a href="shop-left-sidebar.html" className="slider-btn">
                        SHOP NOW
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-slider-item slider-bg-7">
            <div className="d-flex flex-column justify-content-center align-items-start h-100">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-7">
                    <div className="slider-content">
                      <p>Exclusive Offer -20% Off This Week </p>
                      <h1>Style Furniture Gallery </h1>
                      <div className="image d-inline-block">
                        <img
                          src="../assets/images/icons/slider-icon.png"
                          alt=""
                        />
                      </div>
                      <p className="slider-price">
                        FLY Lounge is a series of beautiful and beautiful
                        seating furniture from Danish & Tradition designed by
                        SPACE Copenhagen.
                      </p>
                      <a href="shop-left-sidebar.html" className="slider-btn">
                        SHOP NOW
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-slider-item slider-bg-8">
            <div className="d-flex flex-column justify-content-center align-items-start h-100">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-7">
                    <div className="slider-content">
                      <p>Exclusive Offer -30% Off This Week </p>
                      <h1>Sofa Chair Classic </h1>
                      <div className="image d-inline-block">
                        <img
                          src="../assets/images/icons/slider-icon.png"
                          alt=""
                        />
                      </div>
                      <p className="slider-price">
                        FLY Lounge is a series of beautiful and beautiful
                        seating furniture from Danish & Tradition designed by
                        SPACE Copenhagen.
                      </p>
                      <a href="shop-left-sidebar.html" className="slider-btn">
                        SHOP NOW
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
