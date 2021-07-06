import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar/navbar';
import SearchSort from './components/feed/search-sort/search-sort';
import Feed from './components/feed/feed';
import Recipe from './components/recipe/recipe';

function App() {
  return (
    <Router>
      <Navbar />

      <Route path='/' exact render={() => (
        <>
          <SearchSort />
          <Feed />
        </>
      )} />

      <Route path='/recipe' component={Recipe} />
    </Router>
  );
}

export default App;


