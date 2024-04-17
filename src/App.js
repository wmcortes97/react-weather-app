import { useEffect } from "react";
import Search from "./components/Main/Search/Search";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("App component mounted");
  }, []);
  return (
    <div className="app-container">
      <Search />
    </div>
  );
}

export default App;
