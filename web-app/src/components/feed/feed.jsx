import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './feed.css';

import Card from './card';
import DummyCard from './dummy-card';

const AddNew = () => {
    const random_number = Math.floor(Math.random() * 999999);

    return (
        <Link to={{ pathname: "/edit", state: { id: random_number }}}>
            <div className="add-button-wrapper" style={{position: "relative"}}>
                <div className="add-new-button" ></div> 
            </div>
        </Link>
    )
}


const Feed = props => {
    return (
        <>
            <AddNew />
            <div className="grid-container animated-grid" >
                <Card />
                <Card />
                <Card />
                <DummyCard />
                <DummyCard />
                <DummyCard />
            </div>
        </>
    );
};
 
export default Feed;