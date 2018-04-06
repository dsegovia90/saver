import React, { Component } from 'react';
import './Customers.css';

class Test extends Component {
  constructor() {
    super()

    this.state = {
      customers: []
    }
  }

  componentDidMount() {
    fetch('/api/customers')
    .then(res => {
      return res.json();
    })
    .then(customers => {
      this.setState({customers}, () => {
        console.log(customers)
      })
    })
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.customers.map(customer =>
            <li key={customer.id}>
              {customer.firstName} {customer.lastName}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Test;