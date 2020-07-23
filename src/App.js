import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './components/Header';
import FilterContextProvider from './components/FilterContextProvider';
import Display from './Pages/Display';
import Details from './Pages/Details';

function App () {
  return (
    <FilterContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/display' component={Display} />
          <Route path='/details/:id' component={Details} />
        </Switch>
      </Router>
    </FilterContextProvider>
  );
}

export default App;
