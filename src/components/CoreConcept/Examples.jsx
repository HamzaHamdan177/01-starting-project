import { useState } from "react";
import { EXAMPLES } from "../../data.js";
import TabButton from "../TabButton.jsx";
import Section from "../Section.jsx";
export default function Examples() {
  const [selectTopic, setSelctedTopic] = useState("");
  function clickHandler(component) {
    setSelctedTopic(component);
  }

  return (
    <Section id="examples" title="examples">
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
    </Section>
  );
}
