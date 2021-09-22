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
                <main className="main">
                    <Route
                        path="/Dialogs"
                        render={() => (
                            <Dialogs
                                state={props.state.dialogsPage}
                                addMessage={props.addMessage}
                                updateMessageText={props.updateMessageText}
                            />
                        )}
                    />
                    <Route
                        path="/Profile"
                        render={() => (
                            <Profile
                                state={props.state.profilePage}
                                addPost={props.addPost}
                                updateNewPostText={props.updateNewPostText}
                            />
                        )}
                    />
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;
