import { useState } from "react";

import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectTopic, setSelctedTopic] = useState("");
  function clickHandler(component) {
    setSelctedTopic(component);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>examples</h2>
          <menu>
            <TabButton
              isSelected={selectTopic === "components"}
              onClick={() => {
                clickHandler("components");
              }}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectTopic === "jsx"}
              onClick={() => {
                clickHandler("jsx");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectTopic === "props"}
              onClick={() => {
                clickHandler("props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectTopic === "state"}
              onClick={() => {
                clickHandler("state");
              }}
            >
              State
            </TabButton>
          </menu>

          {!selectTopic ? (
            <p>please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectTopic].title}</h3>
              <p>{EXAMPLES[selectTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
