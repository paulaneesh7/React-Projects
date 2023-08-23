const Hero = function () {
  return (
    <div>
      <main className="hero container">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            Your feet deserve the best and we are here to help you with out
            shoes. Your feet deserve the best and we are here to help you with
            out shoes
          </p>

          <div className="hero-btn">
            <button>Shop Now</button>
            <button className="secondary-btn">Category</button>
          </div>

          <div className="shopping">
            <p>Also Available on</p>
          </div>

          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
        <div className="hero-image">
            <img src="/images/hero-image.png" alt="hero-img" />
        </div>
      </main>
    </div>
  );
};

export default Hero;
