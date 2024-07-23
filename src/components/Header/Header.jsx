import "./Header.css";
import reactImg from "../../assets/react-core-concepts.png";

const Name = ["Core", "fundemental", "cirual"];
function Random() {
  const Random = Math.round(Math.random() * 3);
  return Name[Random];
}

export default function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        <Random /> React concepts you will need for almost any app you are going
        to build!
      </p>
    </header>
  );
}
