import Section from "../Section";
import Card from "../Card";

const DownloadSection = () => {
  return (
    <Section>
      <div className="container">
        <h2>Download the extension</h2>
        <p className="narrow">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
        <div className="cards">
          <Card
            iconFileName="/images/logo-chrome.svg"
            title="Add to Chrome"
            description="Minimum version 62"
            link={{ text: "Add & Install Extension", href: "#" }}
          />
          <Card
            iconFileName="/images/logo-firefox.svg"
            title="Add to Firefox"
            description="Minimum version 55"
            link={{ text: "Add & Install Extension", href: "#" }}
          />
          <Card
            iconFileName="/images/logo-opera.svg"
            title="Add to Opera"
            description="Minimum version 46"
            link={{ text: "Add & Install Extension", href: "#" }}
          />
        </div>
      </div>
    </Section>
  );
};

export default DownloadSection;
