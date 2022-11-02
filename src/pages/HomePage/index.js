import { useCallback, useState } from "react";
import "./index.css";

function HomePage() {
  return (
    <div className="home">
      <section>
        <p className="home__title">
          Платформа номер один із усіма тваринячими послугами
        </p>

        <div className="home__description">
          Пошук серед усіх послуг як варіант
        </div>

        <Tabs>
          <div title="Оголошення"></div>
          <div title="Заклади"></div>
        </Tabs>
      </section>
    </div>
  );
}

function Tab({ activeTab, label, onClick }) {
  return (
    <li
      className={"tabItem " + (activeTab === label ? "tabActive" : "")}
      onClick={() => onClick(label)}
    >
      {label}
    </li>
  );
}

function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(children[0].props.title);

  const onClickTabItem = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  return (
    <div className="tabs">
      <div className="tabRow">
        <ol className="tabList">
          {children.map((child) => {
            const { title } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={title}
                label={title}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
      </div>

      <div>
        {children.map((child) => {
          if (child.props.title !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
}

export default HomePage;