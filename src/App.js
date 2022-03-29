import "./App.css";

//components
import Content from "./components/Content/Content";
import Copyright from "./components/Copyright/Copyright";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <div id="header">
        <Header />
      </div>
      <div id="main-content">
        <Content />
      </div>
      <div id="copyright">
        <Copyright />
      </div>
    </div>
  );
}

export default App;
