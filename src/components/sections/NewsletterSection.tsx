import Section from "../Section";
import NewsletterForm from "../NewsletterForm";

const NewsletterSection = () => {
  return (
    <Section className="newsletter">
      <div className="container narrow">
        <span className="newsletter__joined">35,000+ already joined</span>
        <h2 className="newsletter__title">
          Stay up-to-date with what we’re doing
        </h2>
        <NewsletterForm />
      </div>
    </Section>
  );
};

export default NewsletterSection;
