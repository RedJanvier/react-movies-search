import './App.css';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {Home} from "./pages/home";
import {About} from "./pages/about";
import {Provider} from "react-redux";
import store from "./redux/store";
import listMembers from "./components/listMembers";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <header className="App-header">
                        <p>
                            Welcome to Movie Search App
                        </p>
                        {/* Test routes to be deleted or changed in future */}
                        <ul className="navbar">
                            <li className="nav-item"><Link to="/">Home</Link></li>
                            <li className="nav-item"><Link to="/members">Members</Link></li>
                            <li className="nav-item"><Link to="/about">About</Link></li>
                        </ul>
                        <Switch>
                            {/* Some demo components and routes */}
                            <Route exact path="/">
                                <Home/>
                            </Route>
                            <Route exact path="/members">
                                <listMembers/>
                            </Route>
                            <Route exact path="/about">
                                <About/>
                            </Route>
                        </Switch>
                    </header>
                </div>
            </BrowserRouter>
        </Provider>
    )

}

export default App;
