import React, {Component} from "react";
import "./App.css";
import Frontpage from "./frontpage/Frontpage";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";


import Header from "./Header";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    <main>
                        <Switch>
                            <Route exact path="/" component={Frontpage}/>
                        </Switch>
                    </main>
                    <footer>
                    </footer>

                </div>
            </BrowserRouter>
        );
    }
}

export default App;

