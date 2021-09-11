import React from "react";
import "./App.css";
import Dialogs from "./Components/Dialogs/Dialogs";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <main class="main">
        {/* <Profile /> */}
        <Dialogs />
      </main>
    </div>
  );
};

export default App;
