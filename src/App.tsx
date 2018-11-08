import React, {Component} from "react";
import "./App.css";
import Frontpage from "./frontpage/Frontpage";
import Header from "./Header";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <main>
                    <Frontpage/>
                </main>
                <footer>
                </footer>
            </div>
        );
    }
}

export default App;

