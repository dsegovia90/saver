import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NumberInput.css';

class NumberInput extends Component {
  constructor() {
    super();

    this.state = {
      value: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const { value } = newProps;
    this.setState({ value });
  }

  handleChange(e) {
    const { target } = e;
    const value = target.value >= 0 ? target.value : 0;
    this.setState({ value }, () => {
      const sendState = {
        [target.name]: this.state.value,
      };
      this.props.handleChange(sendState);
    });
  }

  render() {
    return (
      <div className="input-container">
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <input
          id={this.props.name}
          name={this.props.name}
          onChange={this.handleChange}
          type="number"
          value={this.state.value}
        />
      </div>
    );
  }
}

NumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default NumberInput;
