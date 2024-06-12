interface ISectionProps {
  className?: string;
  children: React.ReactNode;
}

const Section = ({
  className,
  children,
}: React.PropsWithChildren<ISectionProps>) => {
  return <section className={className}>{children}</section>;
};

export default Section;
