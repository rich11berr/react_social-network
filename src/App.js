import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./Components/Dialogs/Dialogs";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <main class="main">
          <Route
            path="/Dialogs"
            render={() => (
              <Dialogs
                userData={props.userData}
                messagesData={props.messagesData}
              />
            )}
          />
          <Route
            path="/Profile"
            render={() => <Profile postsData={props.postsData} />}
          />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
