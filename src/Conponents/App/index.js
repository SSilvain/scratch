import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Wrapper, GlobalStyle } from "./style";
import Statistics from "../Statistics";
import About from "../About";
import Home from "../Home";

const App = () => {
    return (
        <Router>
            <Wrapper>
                <GlobalStyle />
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/statistics">Statistics</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/statistics">
                        <Statistics test="this is test Silvain"/>
                    </Route>
                </Switch>
            </Wrapper>
        </Router>
    );
};

export default App;
