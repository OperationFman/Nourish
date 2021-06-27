import React, { Component } from 'react';
import './feed.css';

class DummyCard extends Component {
    state = {  }

    render() {
        const { } = this.props;
        
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
}
 
export default DummyCard;