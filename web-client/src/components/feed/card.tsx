import React, { Component } from 'react';
import './feed.css';

class Card extends Component {
    state = {  }

    render() {
        const { } = this.props;
        
        return ( 
            <div className="card responsive-scale" style={{backgroundImage:``}}>
                    <div className="card-wrapper">
                        <div className="card-title-price">
                            <h3>Title</h3>
                            <h3>$00.0</h3>
                        </div>
                        <div className="card-time">
                            <h3>Time</h3>
                        </div>
                    </div>
            </div>
        );
    }
}
 
export default Card;