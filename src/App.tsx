import { useState } from "react";
import "./App.css";
import { Button } from "./components/button";
import { Card } from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <div className="flex flex-col">
          <h1>Button: </h1>
          <Button onClick={() => setCount((count) => count + 1)}>
            {" "}
            count is {count}
          </Button>
          <h1>Card: </h1>
          <Card>hello, i am a card</Card>
        </div>
      </div>
    </>
  );
}

export default App;
