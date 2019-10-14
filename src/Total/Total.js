import React, { Component } from 'react';
import '../App.css';

class Total extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const total = Object.keys(this.props.selected).reduce((acc, curr) => acc + this.props.selected[curr].cost, 0)
        return ( 
            <div className="summary__total">
            <div className="summary__total__label">Your Price: </div>
            <div className="summary__total__value">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(total) }
            </div>
          </div>
         );
    }
}
 
export default Total;