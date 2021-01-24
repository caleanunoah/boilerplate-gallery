import {React} from 'react';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

// custom components 
import GalleryPage from './Components/GalleryPage'; 
import HomePage from './Components/HomePage';
import ScrollToTop from './Components/ScrollToTop';

// style sheets 
import './App.css';

function App() {
  return (
    <div className="App">

      {/* Router for external browser navigation */ }
      <BrowserRouter>

          <ScrollToTop/>

          <Switch>
            {/* link to gallery page */ }
            <Route path="/gallery" component={GalleryPage}></Route>
            {/* home page link -- has to be underneath do not move  */ }
            <Route path="/" component={HomePage}></Route>

          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
