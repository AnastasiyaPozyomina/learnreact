import React, { Component } from 'react';

export default class EmailInput extends Component {
    constructor () {
        super ();
        this.state = {
          email: '',
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
    render() {
        return (
            <div>
                <input
                          type="text"
                          name="email"
                          class="form-control"
                          id="email"
                          placeholder="E-Mail Address"
                          required=""
                          value={this.state.email}
                          onChange={this.handleChange}
                        />
            </div>
        );
    }
}

