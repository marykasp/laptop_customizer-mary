import React, { Component } from 'react';
import Summary from './Summary/Summary';
import FeatureList from './FeatureList/FeatureList';
import Total from './Total/Total'
import Header from './Header/Header'
import './App.css';
import slugify from 'slugify';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    }
  }

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {  

    return (
      <div className="App">
        <Header />     
        <main>
          <section className="main__form">
            <h3>Customize Your Laptop</h3>
            <FeatureList 
              features={this.props.features}
              selected={this.state.selected}
              onSelect={this.updateFeature}
            />
          </section>
          <section className="main__summary">
            <Summary selected={this.state.selected} />
            <Total selected={this.state.selected} />
          </section>
        </main>
      </div>
    );
  }
}

export default App; 