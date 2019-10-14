import React, { Component } from 'react';
import '../App.css';
import Summary from '../Summary/Summary';
import Total from '../Total/Total';

class Cart extends Component {
    
    render() { 
        return ( 
            <section className="main__sumary">
            <h3>NEW GREENLEAF 2018</h3>
            <Summary selected={this.props.selected} />
            <Total selected ={this.props.selected} />
            </section>
            );
    }
}
 
export default Cart;