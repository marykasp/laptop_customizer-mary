import React, {Component} from 'react';
import FeatureOption from '../FeatureOption/FeatureOption';
import '../App.js';

export default class Feature extends Component {
  render() {
    const options = this.props.options.map((item, index) => {
    const selectedClass = item.name === this.props.selected[this.props.name].name ? 'feature__selected' : '';
    const featureClass = 'feature__option ' + selectedClass;
    const itemHash = slugify(JSON.stringify(item));
    return (
      <FeatureOption 
          featureClass={featureClass}
          key={index} 
          onSelect={this.props.onSelect}
          item={item}
          featureName={this.props.name}
      />
    )})

    return (
      <div className="feature" key={this.props.name}>
        <div className="feature__name">{this.props.name}</div>
        <ul className="feature__list">
          {options}
        </ul>
      </div>
    )
  }
}