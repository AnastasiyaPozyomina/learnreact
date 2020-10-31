import React, { Component } from "react";

export default class FormSend extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      email: "",
      subject: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = () => {};

  render() {
    return (
      <div>
        <div class="send-message">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="section-heading">
                  <h2>Send us a Message</h2>
                </div>
              </div>
              <div class="col-md-8">
                <div class="contact-form">
                  <form
                    id="contact"
                    action=""
                    method="post"
                    onSubmit={this.handleSubmit}
                  >
                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12">
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
                      <div class="col-lg-12 col-md-12 col-sm-12">
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
                      <div class="col-lg-12 col-md-12 col-sm-12">
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
                      <div class="col-lg-12">
                        <textarea
                          name="message"
                          rows="6"
                          class="form-control"
                          id="message"
                          placeholder="Your Message"
                          required
                          value={this.state.message}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div class="col-lg-12">
                        <button className="filled-button" type="submit">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-md-4"></div>
          </div>
        </div>
      </div>
    );
  }
}
