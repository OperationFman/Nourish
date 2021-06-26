import React, { Component } from 'react';
import './feed.css';

class Card extends Component {
    state = {  }

    render() {
        const { } = this.props;
        return ( 
            <div className="card responsive-scale" style={{backgroundImage:``}}>
                <div className="test">
                    <div className="card-name">
                        <h3>Kill</h3>
                        <h3>Me</h3>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Card;