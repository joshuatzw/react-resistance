import Main from "./components/Main";
import ResourcesContext from "./store/ResourcesContext";

function App() {
  return (
    <ResourcesContext>
      <div className="App">
        <Main />
      </div>
    </ResourcesContext>
  );
}

export default App;
