import "./App.css";
import Search from "./components/Search";
import Main from "./components/Main";
import Week from "./components/Week";

function App() {
  return (
    <div className="app-container">
      <Search />
      {/* <Main /> */}
      <Week />
    </div>
  );
}

export default App;
