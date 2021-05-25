import React from 'react';
import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import BasicLayout from "./layouts";
import Kanban from "./pages/Kanban";
import About from "./pages/About";

function App() {
    return (
        <Router>
            <BasicLayout>
                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/">
                        <Kanban/>
                    </Route>
                </Switch>
            </BasicLayout>
        </Router>
    );
}

export default App;