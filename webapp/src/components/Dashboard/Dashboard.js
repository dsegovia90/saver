import React, { Component } from 'react';
import { graphql, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import './Dashboard.css';
import NumberInput from '../Form/NumberInput';

const userQuery = gql(`
  query users($userName: String!) {
    users(userName: $userName) {
      userName
      monthlyEarnings,
      desiredMonthlySavings
    }
  }
`);

const updateSettings = gql(`
  mutation updateSettings(
    $userName: String!,
    $monthlyEarnings: Float,
    $desiredMonthlySavings: Float) {
      updateSettings(
        userName: $userName,
        monthlyEarnings: $monthlyEarnings,
        desiredMonthlySavings: $desiredMonthlySavings) {
          userName
          monthlyEarnings
          desiredMonthlySavings
      }
  }
`);

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      monthlyEarnings: 0,
      desiredMonthlySavings: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser() {
    const x = this.props.client.query({
      query: userQuery,
      variables: {
        userName: 'dsego',
      },
    });
    x.then(({ data }) => {
      const user = data.users[0];

      this.setState(user);
    });
  }

  handleChange(change) {
    const variables = change;
    variables.userName = this.state.userName;
    this.props.updateSettings({
      variables,
    })
      .then(({ data }) => {
        const newState = data.updateSettings;
        this.setState(newState);
      });
  }

  render() {
    return (
      <div>
        <p>{this.state.userName}</p>
        <p>{this.state.monthlyEarnings}</p>
        <p>{this.state.desiredMonthlySavings}</p>
        <NumberInput
          handleChange={this.handleChange}
          label="Monthly Earnings"
          name="monthlyEarnings"
          value={this.state.monthlyEarnings}
        />
        <NumberInput
          handleChange={this.handleChange}
          label="Desired Monthly Savings"
          max={this.state.monthlyEarnings}
          name="desiredMonthlySavings"
          value={this.state.desiredMonthlySavings}
        />
      </div>
    );
  }
}

export default withApollo(graphql(updateSettings, { name: 'updateSettings' })(Dashboard));
