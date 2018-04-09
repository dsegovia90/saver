import React, { Component } from 'react';
import './Dashboard.css';
import NumberInput from '../Form/NumberInput';

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      user_name: '',
      monthly_earnings: 0,
      desired_monthly_savings: 0,
      // daily_expenses: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('/api')
      .then(res => res.json())
      .then(user => this.setState(user));
  }

  handleChange(newState) {
    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();
    const fetchData = this.state;
    fetch('/api', {
      method: 'put',
      body: JSON.stringify(fetchData),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.user_name}</p>
        <p>{this.state.monthly_earnings}</p>
        <p>{this.state.desired_monthly_savings}</p>
        <form onSubmit={this.handleSubmit}>
          <NumberInput
            handleChange={this.handleChange}
            label="Monthly Earnings"
            name="monthly_earnings"
            value={this.state.monthly_earnings}
          />
          <NumberInput
            handleChange={this.handleChange}
            label="Desired Monthly Savings"
            max={this.state.monthly_earnings}
            name="desired_monthly_savings"
            value={this.state.desired_monthly_savings}
          />
          <input type="submit" value="Update" />
        </form>
      </div>
    );
  }
}

export default Dashboard;
