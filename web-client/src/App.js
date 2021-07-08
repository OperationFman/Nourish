import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar/navbar';
import SearchSort from './components/feed/search-sort/search-sort';
import Feed from './components/feed/feed';
import Recipe from './components/recipe/recipe';
import EditRecipe from './components/edit-recipe/edit-recipe-form';

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

      <Route path="/create" component={EditRecipe} />
    </Router>
  );
}

export default App;
