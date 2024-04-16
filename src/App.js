import { useEffect } from "react";
import Main from "./components/Main/Main/Main";
import Search from "./components/Main/Search/Search";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("App component mounted");
  }, []);
  return (
    <div className="app-container">
      <Search />
      <Main />
    </div>
  );
}

export default App;
