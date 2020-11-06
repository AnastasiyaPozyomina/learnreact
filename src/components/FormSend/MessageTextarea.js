import React, { Component } from 'react';

export default class MessageTextarea extends Component {
    constructor () {
        super ();
        this.state = {
            message: "",
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
                  <textarea
                          name="message"
                          rows="6"
                          class="form-control"
                          id="message"
                          placeholder="Your Message"
                          value={this.state.message}
                          onChange={this.handleChange}
                        />
            </div>
        );
    }
}

