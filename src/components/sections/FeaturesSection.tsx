import Section from "../Section";
import Tabs from "../Tabs";

const FeaturesSection = () => {
  const tabListData = [
    "Simple Bookmarking",
    "Speedy Searching",
    "Easy Sharing",
  ];

  const tabPanelsData = [
    {
      image: {
        src: "./images/illustration-features-tab-1.svg",
        alt: "",
        height: 346,
      },
      titleText: "Bookmark in one click",
      contentText:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      button: { href: "#", text: "more info" },
    },
    {
      image: {
        src: "./images/illustration-features-tab-2.svg",
        alt: "",
        height: 416,
      },
      titleText: "Intelligent search",
      contentText:
        "Our powerful search feature will help you find saved sites in no  time at all. No need to trawl through all of your bookmarks.",
      button: { href: "#", text: "more info" },
    },
    {
      image: {
        src: "./images/illustration-features-tab-3.svg",
        alt: "",
        height: 380,
      },
      titleText: "Share your bookmarks",
      contentText:
        "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      button: { href: "#", text: "more info" },
    },
  ];
  return (
    <Section className="section--bg-overflow">
      <div className="container">
        <h2>Features</h2>
        <p className="narrow">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
        <Tabs tabListData={tabListData} tabPanelsData={tabPanelsData} />
      </div>
    </Section>
  );
};

export default FeaturesSection;
