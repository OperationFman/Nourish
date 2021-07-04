import React, { useEffect, useState } from 'react';

import './App.css';
import SearchSort from './components/feed/search-sort/search-sort';
import Navbar from './components/navbar/navbar';
import Feed from './components/feed/feed';

function App() {
  return (
    <>

      <Navbar />

      <SearchSort />

      <Feed />

    </>
  );
}

export default App;
