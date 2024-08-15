import { useState } from "react";
import "./App.css";
import Students from "./Components/Students";

const ACTIVE_TAB = {
  HOME: "Home",
  STUDENT: "Student",
  FACAULTY: "Facaulty",
  ASSETS: "Assets",
  LOGOUT: "Logout",
};

function App() {
  const [activeTab, setActiveTab] = useState(ACTIVE_TAB.HOME);
  return (
    <div className="App">
      <div className="navbar">
        <span>Home</span>
        <span onClick={() => setActiveTab(ACTIVE_TAB.STUDENT)}>Student</span>
        <span>Facaulty</span>
        <span>Assets</span>
        <span>Logout</span>
      </div>
      {activeTab === ACTIVE_TAB.STUDENT && <Students />}
    </div>
  );
}

export default App;
