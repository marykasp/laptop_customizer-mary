import React, {Component} from 'react'
import Feature from '../Feature/Feature'

export default class FeaturesList extends Component {
  render() {
    const {selected} = this.props;
    const features = Object.keys(this.props.features)
      .map((feature, idx) => {
          return (
              <Feature 
                name={feature} 
                key={feature} 
                options={this.props.features[feature]} 
                selected={selected}
                onSelect={this.props.onSelect}
              />
          )
      })

    return (
      <section className="main__form">
        {features}
      </section>
    )
  }
}