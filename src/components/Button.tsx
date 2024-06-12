interface IButtonProps {
  className?: string;
  href?: string;
  children: React.ReactNode;
}

const Button = ({
  className,
  href,
  children,
}: React.PropsWithChildren<IButtonProps>) => {
  if (href) {
    return (
      <a href={href} className={`btn${className ? " " + className : ""}`}>
        {children}
      </a>
    );
  }
  return (
    <button className={`btn${className ? " " + className : ""}`}>
      {children}
    </button>
  );
};
export default Button;
