import { useState } from "react";
import "./App.css";
import { Button } from "./components/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <div style={{ display: "flex" }}>
          <h1>Button: </h1>
          <Button onClick={() => setCount((count) => count + 1)}>
            {" "}
            count is {count}
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
