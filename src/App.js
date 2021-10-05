import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import FriendsContainer from "./Components/Friends/FriendsContainer";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Nav />
                <main className="main">
                    <Route
                        path="/Dialogs"
                        render={() => <DialogsContainer />}
                    />
                    <Route path="/Profile" render={() => <Profile />} />
                    <Route
                        path="/Friends"
                        render={() => <FriendsContainer />}
                    />
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;
