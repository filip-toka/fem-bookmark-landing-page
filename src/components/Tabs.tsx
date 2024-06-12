import { useState, createRef, useMemo, RefObject } from "react";
import Button from "./Button";

interface ITabsProps {
  tabListData: string[];
  tabPanelsData: {
    image: { src: string; alt: string; height: number };
    titleText: string;
    contentText: string;
    button: { href?: string; text: string };
  }[];
}

interface ITabListProps {
  data: string[];
  activeTabId: number;
  handleTabChange: (id: number) => void;
}

interface ITabsPanelProps {
  id: number;
  activeTabId: number;
  image: { src: string; alt: string; height: number };
  titleText: string;
  contentText: string;
  button: { href?: string; text: string };
}

const TabList = ({ data, activeTabId, handleTabChange }: ITabListProps) => {
  const buttonsRefs = useMemo(() => {
    const refs: Array<RefObject<HTMLButtonElement>> = [];
    data.forEach((_item, i) => {
      refs[i] = createRef<HTMLButtonElement>();
    });
    return refs;
  }, [data]);

  function handleTabFocusOnArrowKeydown(
    event: React.KeyboardEvent<HTMLButtonElement>,
    id: number
  ) {
    if (event.key === "ArrowLeft" && id > 1) {
      return buttonsRefs[id - 1].current?.focus();
    }
    if (event.key === "ArrowRight" && id < data.length) {
      return buttonsRefs[id + 1].current?.focus();
    }
  }

  return (
    <ul className="tabs__tablist" role="tablist">
      {data.map((item, i) => {
        const isActiveTab = activeTabId === i ? true : false;
        return (
          <li role="presentation" key={i}>
            <button
              id={`button-` + i}
              className={`tabs__button${
                isActiveTab ? " tabs__button--opened" : ""
              }`}
              aria-controls={`tab-panel-` + i}
              onClick={() => handleTabChange(i)}
              onKeyDown={(e) => handleTabFocusOnArrowKeydown(e, i)}
              aria-selected={isActiveTab ? "true" : "false"}
              role="tab"
              ref={buttonsRefs[i]}
            >
              {item}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

const TabPanel = ({
  id,
  activeTabId,
  image,
  titleText,
  contentText,
  button,
}: ITabsPanelProps) => {
  const isActiveTab = activeTabId === id ? true : false;
  return (
    <div
      className={`tabs__panel${isActiveTab ? " tabs__panel--active" : ""}`}
      id={`tab-panel-` + id}
      role="tabpanel"
      aria-labelledby={`button-` + id}
    >
      <div className="row tabs__row">
        {isActiveTab && (
          <>
            <div className="col-6">
              <img
                src={image.src}
                alt={image.alt}
                className="image-with-bg-shape"
                height={image.height}
              />
              <div className="shape-left"></div>
            </div>
            <div className="col-6">
              <h3>{titleText}</h3>
              <p>{contentText}</p>
              <Button href={button.href} className="btn--primary">
                {button.text}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const Tabs = ({ tabListData, tabPanelsData }: ITabsProps) => {
  const [activeTabId, setActiveTabId] = useState<number>(0);

  function handleTabChange(id: number) {
    setActiveTabId(id);
  }

  return (
    <div className="tabs">
      <TabList
        data={tabListData}
        activeTabId={activeTabId}
        handleTabChange={handleTabChange}
      />

      {tabPanelsData.map((item, i) => {
        return (
          <TabPanel
            key={i}
            id={i}
            activeTabId={activeTabId}
            image={item.image}
            titleText={item.titleText}
            contentText={item.contentText}
            button={item.button}
          />
        );
      })}
    </div>
  );
};

export default Tabs;
