import React from "react";
import "./App.css";
import Notifications from "./Notifications";
import Login from "./Login";
import Footer from "./ Footer";
import Header from "./Header";

function App() {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;