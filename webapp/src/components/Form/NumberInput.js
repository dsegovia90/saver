import React, { Component } from 'react';
import './NumberInput.css';

class Input extends Component {
  constructor() {
    super()

    this.state = {
      value: 0
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      value: newProps.value
    })
  }

  handleChange(e) {
    const target = e.target;
    let value = target.value >= 0 ? target.value : 0;
    this.setState({value}, () => {
      const sendState = {
        [target.name]: this.state.value
     }
     this.props.handleChange(sendState)
   })
  }

  render() {
    return (
      <div className="input-container">
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <input
          id={this.props.name}
          name={this.props.name}
          onChange={this.handleChange}
          type='number'
          value={this.state.value}
          />
      </div>
    );
  }
}

export default Input;