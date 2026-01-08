import { useState } from "react";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
const [user, setUser] = useState(
  JSON.parse(localStorage.getItem("user"))
);


  if (!user) {
    return <Auth setUser={setUser} />;
  }

  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <Dashboard user={user} />
    </>
  );
}

export default App;
