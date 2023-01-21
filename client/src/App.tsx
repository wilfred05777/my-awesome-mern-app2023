import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import SidebarNav from "./components/sidebarnav/SidebarNav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex ">
      <SidebarNav/>
    </div>
  );
}

export default App;
