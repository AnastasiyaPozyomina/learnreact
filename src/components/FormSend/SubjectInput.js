import React, { Component } from 'react';

export default class SubjectInput extends Component {
    constructor () {
        super ();
        this.state = {
            subject: "",
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
                          name="subject"
                          type="text"
                          class="form-control"
                          id="subject"
                          placeholder="Subject"
                          required=""
                          value={this.state.subject}
                          onChange={this.handleChange}
                        />
            </div>
        );
    }
}

