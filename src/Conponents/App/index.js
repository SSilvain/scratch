import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Wrapper, GlobalStyle } from "./style";
import Statistics from "../Statistics";
import About from "../About";
import Home from "../Home";
import Header from "../Header";
import { open } from "../../utils/indexdb";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            loading: true
        }

    }
    componentDidMount() {
        open().then(() => {
            this.setState({
                loading: false
            })
        });
    }
    render() {
        if (this.state.loading) {
            return <div>Loading...</div>
        }
        return (
            <Router>
                <Wrapper>
                    <GlobalStyle />
                    <Header/>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/statistics">
                            <Statistics test="this is test Silvain" />
                        </Route>
                    </Switch>
                </Wrapper>
            </Router>
        );
    }

};

export default App;
