interface INavItemProps {
  link: { text: string; href: string };
  className?: string;
}

const NavItem = ({ link, className }: INavItemProps) => {
  return (
    <li>
      <a href={link.href} className={className}>
        {link.text}
      </a>
    </li>
  );
};

export default NavItem;
