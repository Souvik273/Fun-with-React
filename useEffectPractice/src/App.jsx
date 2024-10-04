import { useState } from "react";
import LoggerComponent from "./Components/LoggerComponent";
import TimerComponent from "./Components/TimerComponent";
import DataFetcher from "./DataFetcher";

function App() {
  const [load, setLoad] = useState(true);

  function loadData() {
    setLoad(false);
  }

  function removeData() {
    setLoad(true);
  }

  return (
    <>
      {/* <LoggerComponent/> */}
      {/* <TimerComponent/> */}
      {
        load ? 
        <button onClick={loadData}>Load Data</button> 
        : 
        <>
          <DataFetcher />
          <button onClick={removeData}>Clear Data</button>
        </>
      }
    </>
  );
}

export default App;
