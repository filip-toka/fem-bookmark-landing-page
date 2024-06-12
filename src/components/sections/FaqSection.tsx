import Section from "../Section";
import Accordion from "../Accordion";
import Button from "../Button";

const FaqSection = () => {
  const accordionData = [
    {
      headingText: "What is Bookmark?",
      contentText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
    },
    {
      headingText: "How can I request a new browser?",
      contentText:
        "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
    {
      headingText: "Is there a mobile app?",
      contentText:
        "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
    },
    {
      headingText: "What about other Chromium browsers?",
      contentText:
        "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
    },
  ];

  return (
    <Section>
      <div className="container narrow">
        <h2>Frequently Asked Questions</h2>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
        <Accordion data={accordionData} />
        <Button href="#" className="btn--primary">
          More Info
        </Button>
      </div>
    </Section>
  );
};

export default FaqSection;
