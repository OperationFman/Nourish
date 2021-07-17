import React, { useState } from 'react';
import './feed.css';

const DummyCard = props => {
    return ( 
        <div className="card responsive-scale">
            <div className="card-wrapper">
                <div className="dummy-card-title">⠀</div>
                <div className="dummy-card-price">⠀</div>
                <div className="dummy-card-time">⠀</div>
            </div>
        </div>
    );
}

 
export default DummyCard;