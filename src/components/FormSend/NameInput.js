import React, {Component} from 'react';

export default class NameInput extends Component {
  constructor () {
    super ();
    this.state = {
      firstName: '',
    };
    this.handleChange = this.handleChange.bind (this);
    this.handleSubmit = this.handleSubmit.bind (this);
  }

  handleChange (event) {
    const {name, value} = event.target;
    this.setState ({
      [name]: value,
    });
  }

  handleSubmit = () => {};
  render () {
    return (
      <div>
        <input
          type="text"
          name="firstName"
          class="form-control"
          id="name"
          placeholder="Full Name"
          required
          value={this.state.firstName}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
