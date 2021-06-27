import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/feed/card';
import DummyCard from './components/feed/dummy-card';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     {/*  Header with logo, filter and search component */}
        
    //   </header>
    //     {/* Authentication component */}
    //     {/* Feed component */}
    // </div>
    <React.Fragment>

    <div className="temp-header">
      <h1>Nourish</h1>
    </div>

    <div className="grid-container animated-grid">
      <Card />
      <Card />
      <Card />
      <DummyCard />
      <DummyCard />
      <DummyCard />
      
    </div>
    </React.Fragment>
  );
}

export default App;
