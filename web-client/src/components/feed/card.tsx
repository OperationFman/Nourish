import React, { Component } from 'react';
import './feed.css';

class Card extends Component {
    state = {  }

    render() {
        const { } = this.props;
        
        return ( 
            <div className="card responsive-scale" style={{backgroundImage:`url(https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1103&q=80)`}}>
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
    }
}
 
export default Card;