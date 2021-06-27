import React, { useState } from 'react';
import './feed.css';

const Card = props => {
    return ( 
        <div className="card responsive-scale" style={{boxShadow: "inset 0px -50px 70px 0px hsla(0,0%,0%,.5)", backgroundImage:`url(https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1103&q=80)`}}>
                <div className="card-wrapper">
                    <div className="card-title-price">
                        <h3>Spaghetti</h3>
                        <h3>$5.00</h3>
                    </div>
                    <div className="card-time">
                        <h3>1h 30m 🕒</h3>
                    </div>
                </div>
        </div>
    );
};
 
export default Card;