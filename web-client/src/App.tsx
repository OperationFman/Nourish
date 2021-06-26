import React from 'react';
import './App.css';
import Card from './components/feed/card';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     {/*  Header with logo, filter and search component */}
        
    //   </header>
    //     {/* Authentication component */}
    //     {/* Feed component */}
    // </div>
    <div className="grid-container animated-grid">
      <div className="card responsive-scale" style={{backgroundImage:``}}><Card /></div>
      <div className="card responsive-scale"></div>
      <div className="card responsive-scale"></div>
      <div className="card responsive-scale"></div>
      <div className="card responsive-scale"></div>
      <div className="card responsive-scale"></div>
      <div className="card responsive-scale"></div>
      <div className="card responsive-scale"></div>
      <div className="card responsive-scale"></div>
      <div className="card responsive-scale"></div>
      <div className="card responsive-scale"></div>
      <div className="card responsive-scale"></div>
    </div>
  );
}

export default App;
