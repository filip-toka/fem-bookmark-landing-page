import Button from "./Button";

interface ICardProps {
  iconFileName: string;
  title: string;
  description: string;
  link: { text: string; href: string };
}

const Card = ({ iconFileName, title, description, link }: ICardProps) => {
  return (
    <div className="card">
      <div className="card__body">
        <img
          src={iconFileName}
          alt=""
          className="card__icon"
          aria-hidden="true"
        />
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
      </div>
      <div className="card__footer">
        <Button href={link.href} className="btn--primary card__button">
          {link.text}
        </Button>
      </div>
    </div>
  );
};

export default Card;
