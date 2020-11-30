import { Fragment } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import listMembers from "./components/listMembers";

function App() {
    return ( <
        Provider store = { store } >
        <
        Fragment >
        <
        div className = "App" >
        <
        header className = "App-header" >
        <
        p > Welcome to Movie Search App < /p> <
        /header> <
        /div> <
        listMembers / >
        <
        /Fragment> <
        /Provider>
    );
}

export default App;