import { useState } from "react";

interface IAccordionProps {
  data: { headingText: string; contentText: string }[];
}

interface IAccordionItemProps {
  headingText: string;
  contentText: string;
  ariaControlsId: number;
  openedContents: number[];
  handleOpenCloseContent: (id: number) => void;
}

const AccordionItem = ({
  headingText,
  contentText,
  ariaControlsId,
  openedContents,
  handleOpenCloseContent,
}: IAccordionItemProps) => {
  const isOpened = openedContents.includes(ariaControlsId);
  return (
    <>
      <h3 className="accordion__heading">
        <button
          className={`accordion__button${
            isOpened ? " accordion__button--opened" : ""
          }`}
          aria-expanded={isOpened ? "true" : "false"}
          aria-controls={`accordion-content-` + ariaControlsId}
          onClick={() => handleOpenCloseContent(ariaControlsId)}
        >
          {headingText}
        </button>
      </h3>
      <div
        className={`accordion__content${
          isOpened ? " accordion__content--opened" : ""
        }`}
        id={`accordion-content-` + ariaControlsId}
      >
        {isOpened && contentText}
      </div>
    </>
  );
};

const Accordion = ({ data }: IAccordionProps) => {
  const [openedContents, setOpenedContents] = useState<number[]>([]);

  function handleOpenCloseContent(ariaControlsId: number) {
    setOpenedContents((prevOpened) => {
      if (prevOpened.includes(ariaControlsId)) {
        return prevOpened.filter((e) => e !== ariaControlsId);
      }
      return [...prevOpened, ariaControlsId];
    });
  }

  return (
    <div className="accordion">
      {data.map((item, i) => {
        return (
          <AccordionItem
            key={i}
            headingText={item.headingText}
            contentText={item.contentText}
            ariaControlsId={i}
            openedContents={openedContents}
            handleOpenCloseContent={handleOpenCloseContent}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
