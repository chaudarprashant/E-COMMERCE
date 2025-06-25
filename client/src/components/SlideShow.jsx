import React from 'react';
import './SlideShow.css'; // Import custom styles

const SlideShow = () => {
  return (
    <div className="slideshow-container">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/uber_new_high._CB537689643_.jpg"
              className="d-block w-100 carousel-img"
              alt="Slide 1"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some placeholder content for the first slide.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img15/OP/Unrec/Hero/5th/6th/june/PC_Hero3000X1200_OP._CB791882162_.jpg"
              className="d-block w-100 carousel-img"
              alt="Slide 2"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some placeholder content for the second slide.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img25/Media/PC_Hero_3000x1200_Asin-toys-1x._CB547414496_.jpg"
              className="d-block w-100 carousel-img"
              alt="Slide 3"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some placeholder content for the third slide.</p>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default SlideShow;
