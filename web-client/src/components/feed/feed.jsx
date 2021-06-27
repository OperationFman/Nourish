import React, { useState } from 'react';
import './feed.css';
import Card from './card';
import DummyCard from './dummy-card';

const Feed = props => {
    return (
        <div className="grid-container animated-grid">
            <Card />
            <Card />
            <Card />
            <DummyCard />
            <DummyCard />
            <DummyCard />
        </div>
    );
};
 
export default Feed;