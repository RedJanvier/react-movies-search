import { Fragment } from "react";
import './css/App.css';
import Row from './Row';
import request from './request';
import Banner from './components/Banner';
import { Provider } from "react-redux";
import store from "./redux/store";
import listMembers from "./components/listMembers";

function App() {
    return ( <Provider store = { store } >
        <Fragment >
        <div className = "App" >
        <header className = "App-header" >
            <p> Welcome to Movie Search App </p> </header>
        </div>
        <listMembers />
        <div className="container row">
          <Banner />
          <Row title='NETFLIX ORIGINALS' fetchUrl={ request.fetchNetflixOriginal } isLargeRow/>
          <Row title='TRENDING NOW' fetchUrl={ request.fetchTrending }/>
          <Row title='TOP RATED' fetchUrl={ request.fetchTopRated }/>
          <Row title='ACTION MOVIES' fetchUrl={ request.fetchActionMovies }/>
      </div>
              
      </Fragment>
    </Provider>
    );
}

export default App;