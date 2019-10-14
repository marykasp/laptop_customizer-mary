import React, {Component} from 'react';
import '../App.css';

export default class FeatureOption extends Component {
  render() {
        return (
            <div key={this.props.key} className="feature__item">
              <input
                type="radio"
                id={this.props.key}
                className="feature__option"
                onChange={evt => this.props.onSelect(evt)}
              />
              <label htmlFor={this.props.key} className="feature__label">
                {this.props.item.name} 
              </label>
            </div>
          );
  }
}