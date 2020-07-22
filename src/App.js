import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import FilterContextProvider from './components/FilterContextProvider';
import Display from './Pages/Display';

function App () {
  return (
    <FilterContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/display' component={Display} />
        </Switch>
        <Footer />
      </Router>
    </FilterContextProvider>
  );
}

export default App;
