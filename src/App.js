import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./Components/Dialogs/Dialogs";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <main class="main">
          <Route path="/Dialogs" component={Dialogs} />
          <Route path="/Profile" component={Profile} />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
