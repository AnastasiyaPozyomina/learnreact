import React, { Component } from "react";
import EmailInput from './EmailInput';
import MessageTextarea from './MessageTextarea';
import NameInput from './NameInput';
import SubjectInput from './SubjectInput';


export default class FormSend extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      email: "",
      subject: "",
      message: "",
      formErrors:{email:''},
      emailValid:false,
      formValid:false
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
        <div class="contact-form">
                  <form
                    id="contact"
                    action=""
                    method="post"
                    onSubmit={this.handleSubmit}
                  >
                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12">
                      <NameInput />
                      </div>
                      <div class="col-lg-12 col-md-12 col-sm-12">
                      <EmailInput />
                      </div>
                      <div class="col-lg-12 col-md-12 col-sm-12">
                      <SubjectInput />
                      </div>
                      <div class="col-lg-12">
                     <MessageTextarea />
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
    );
  }
}
