import React, {Component} from 'react';

export default class FormSend extends Component {
  constructor () {
    super ();
    this.state = {
      firstName: '',
      email: '',
      subject: '',
      message: '',
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

  handleSubmit (event) {
    alert (this.state.firstName + ', ' + 'your message has been sent');
    event.preventDefault ();
  }

  render () {
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
                        <fieldset>
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
                        </fieldset>
                      </div>
                      <div class="col-lg-12 col-md-12 col-sm-12">
                        <fieldset>
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
                        </fieldset>
                      </div>
                      <div class="col-lg-12 col-md-12 col-sm-12">
                        <fieldset>
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
                        </fieldset>
                      </div>
                      <div class="col-lg-12">
                        <fieldset>
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
                        </fieldset>
                      </div>
                      <div class="col-lg-12">
                        <fieldset>
                          <input
                            type="submit"
                            value="Send Message"
                            id="form-submit"
                            class="filled-button"
                            onSubmit={this.handleSubmit}
                          />
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
