import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import { useState } from "react";
import ChangePassword from "./components/ChangePassword";
import UpdateProfile from "./components/UpdateProfile";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="App">
      <hr />
      <button onClick={() => setToggle(!toggle)}>
        Go to {toggle ? "Login Page" : "Register Page"}{" "}
      </button>
      {toggle ? <Register /> : <Login />}

      <hr/>
      <ChangePassword />
      <hr />

      <UpdateProfile />
      <hr />
    </div>
  );
}

export default App;
