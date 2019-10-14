import React, { Component } from 'react';
import slugify from 'slugify';
// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  

class Feature extends Component {
  
   
    render() { 
        const options = this.props.options.map((item,index) => {
            const itemHash = slugify(JSON.stringify(item));
            return (
                <div key={itemHash} className="feature__item">
                    <input
                    type="radio"
                    id={itemHash}
                    name={slugify(this.props.name)}
                    checked={item.name === this.props.selected[this.props.name].name}
                    className="feature__option"
                    />
                    <label htmlFor={itemHash} className="feature__label">
                    {item.name} ({USCurrencyFormat.format(item.cost)})
                    </label>
                </div>
            )
        })
        return ( 
            <div>
            <h3>{this.props.name}</h3>
            {options}
            </div>
         );
    }
}
 
export default Feature;