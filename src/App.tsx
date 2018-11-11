import React, {Component} from "react";
import "./App.css";
import Frontpage from "./frontpage/Frontpage";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";

import Header from "./Header";
import Registry from "./Registry";
import Attribution from "./Attribution";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    <main>
                        <Switch>
                            <Route exact path="/" component={Frontpage}/>
                            <Route exact path="/registry" component={Registry}/>
                            <Route exact path="/attribution" component={Attribution}/>
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

