import Section from "../Section";
import Button from "../Button";
const HeroSection = () => {
  return (
    <Section className="section--bg-overflow">
      <div className="container">
        <div className="row hero">
          <div className="col-6">
            <img
              src="/images/illustration-hero.svg"
              alt=""
              className="image-with-bg-shape"
            />
            <div className="shape-right"></div>
          </div>
          <div className="col-6">
            <h1 className="hero__title">A Simple Bookmark Manager</h1>
            <p className="hero__text">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className="hero__buttons">
              <Button className="btn btn--primary">Get it on Chrome</Button>
              <Button className="btn btn--secondary">Get it on Firefox</Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
