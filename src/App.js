import "./App.scss";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="page" onScroll={() => console.log("scroll")}>
      <Header />
      <div className="content"></div>
    </div>
  );
}

export default App;
