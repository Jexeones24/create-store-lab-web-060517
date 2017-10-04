import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleChange = (event) => {
    let property = event.target.name;
    let value = event.target.value
    this.setState({
      [property]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label>Hometown</label>
          <input
            type="text"
            name="hometown"
            value={this.state.hometown}
            onChange={this.handleChange}
          />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
