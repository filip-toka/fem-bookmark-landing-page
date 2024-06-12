import { useState } from "react";
import NavItem from "./NavItem";
import SocialLinks from "../SocialLinks";

const PrimaryNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const primaryNavigationData = [
    { link: "#", text: "Features" },
    { link: "#", text: "Pricing" },
    { link: "#", text: "Contact" },
    { link: "#", text: "Login", className: "primary-nav__link--login-button" },
  ];

  return (
    <nav aria-label="primary navigation">
      <button
        className={`btn--primary-nav-toggle${isMenuOpen ? " opened" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-controls="primary-navigation"
        aria-expanded={isMenuOpen ? "true" : "false"}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      ></button>
      <ul
        className={`primary-nav${isMenuOpen ? " primary-nav--opened" : ""}`}
        id="primary-navigation"
      >
        {primaryNavigationData.map((item, i) => {
          return (
            <NavItem
              key={i}
              link={{
                href: item.link,
                text: item.text,
              }}
              className={`primary-nav__link${" " + item.className}`}
            />
          );
        })}
        <li>
          <SocialLinks className="primary-nav__social-links" />
        </li>
      </ul>
    </nav>
  );
};

export default PrimaryNavigation;
