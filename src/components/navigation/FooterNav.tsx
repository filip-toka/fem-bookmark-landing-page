import NavItem from "./NavItem";

const FooterNavigation = () => {
  const footerNavigationData = [
    { link: "#", text: "Features" },
    { link: "#", text: "Pricing" },
    { link: "#", text: "Contact" },
  ];

  return (
    <ul className="footer__nav">
      {footerNavigationData.map((item, i) => {
        return (
          <NavItem
            key={i}
            link={{
              href: item.link,
              text: item.text,
            }}
            className="footer__nav-link"
          />
        );
      })}
    </ul>
  );
};

export default FooterNavigation;
