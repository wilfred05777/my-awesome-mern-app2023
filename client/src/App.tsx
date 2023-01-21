import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import SidebarNav from "./components/sidebarnav/SidebarNav";
import { Routes, Route } from "react-router-dom";
import Settings from "./screens/settings/Settings";
import Write from "./screens/write/Write";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex">
      <SidebarNav />
      <Routes>
        <Route path="/settings" element={<Settings />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </div>
  );
}

export default App;
