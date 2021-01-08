import logo from './logo.svg';

import {React, Component} from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

// import GalleryPage from './Components/GalleryPage'; 
import HomePage from './Components/HomePage';
//import './Styles/App.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          
          <Switch>
            {/*<Route path="/gallery" component={GalleryPage}></Route>*/}
            <Route path="/" component={HomePage}></Route>

          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
