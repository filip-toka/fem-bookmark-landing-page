import PrimaryNavigation from "./navigation/PrimaryNav";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="navbar">
          <img src="/images/logo-bookmark.svg" alt="" />
          <PrimaryNavigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
