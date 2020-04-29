import React from 'react';
import './App.css';
import Nav from './pages/Nav';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './pages/About';
import Subcategory from './pages/Subcategory';
import Test from './pages/Test';
import  MainCategory from './pages/MainCategory'
import Region from './pages/regionTable/RegionTable'

import { Provider } from 'react-redux';
import store from './store';
import Pagination from './pages/Pagination'


function App() {
  return (
    <div>
    <Provider store={store}>
    <Router>
    <div className="App">
      <Nav />
      <Route path="/about" component={About} />
      <Route path="/subcategory" component={Subcategory} />
      <Route path="/test" component={Test} />
      <Route path="/mainCategory" component={MainCategory}  />
      <Route path="/pagination" component={Pagination}  />
      <Route path="/region" component={Region}  />
    </div>
    </Router>
    </Provider>
    </div>
  );
}

export default App;
