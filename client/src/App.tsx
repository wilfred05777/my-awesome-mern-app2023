import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" ">
      <h1 className="text-3xl text-green-600 font-bold underline">
        Hello world!
      </h1>
    </div>
  );
}

export default App;
