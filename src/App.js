import "./App.css";
import { UseReducer } from "./component/UseReducer";
import { UseState } from "./component/UseState";

function App() {
  return (
    <>
      <UseState name="UseState"/>
      <UseReducer name="UseReducer"/>
    </>
  );
}

export default App;
