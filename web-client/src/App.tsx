import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/feed/card';
import DummyCard from './components/feed/dummy-card';
import AuthenticationButton from './components/authentication/authentication-button';

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
      <h2>Nourish</h2>
      <AuthenticationButton />
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
