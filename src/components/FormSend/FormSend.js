import React, {Component} from 'react';
import {useForm} from 'react-hook-form';

export default function FormSend () {
  const {register, handleSubmit, watch, errors} = useForm ();
  const onSubmit = data => console.log (data);

  console.log (watch ('firstName'));
  return (
    <div>
      <div class="contact-form">
        <form
          id="contact"
          action=""
          method="post"
          onSubmit={handleSubmit (onSubmit)}
        >
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="input-wrapper">
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  id="name"
                  placeholder="Full Name"
                  ref={register ({
                    required: true,
                    minLength: 2,
                    pattern: /[A-Za-z]+$/i,
                  })}
                />
                {errors.firstName &&
                  errors.firstName.type === 'required' &&
                  <p>This is required</p>}

                {errors.firstName &&
                  errors.firstName.type === 'minLength' &&
                  <p>This is field required min length of 2</p>}
                {errors.firstName &&
                  errors.firstName.type === 'pattern' &&
                  <p>Only English</p>}
              </div>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="input-wrapper">
                <input
                  type="text"
                  name="email"
                  class="form-control"
                  id="email"
                  placeholder="E-Mail Address"
                  ref={register ({
                    required: true,
                    pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                  })}
                />
                {errors.email &&
                  errors.email.type === 'required' &&
                  <p>This is required</p>}
                {errors.email &&
                  errors.email.type === 'pattern' &&
                  <p>Email was entered incorrectly</p>}
              </div>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="input-wrapper">
                <input
                  name="subject"
                  type="text"
                  class="form-control"
                  id="subject"
                  placeholder="Subject"
                  ref={register ({
                    required: true,
                    minLength: 4,
                    pattern: /^[A-Za-z0-90-9!#,$%&'*+/=?^_`{|}~-\s]+$/i,
                  })}
                />
                {errors.subject &&
                  errors.subject.type === 'required' &&
                  <p>This is required</p>}
                {errors.subject &&
                  errors.subject.type === 'minLength' &&
                  <p>This is field required min length of 4</p>}
                {errors.subject &&
                  errors.subject.type === 'pattern' &&
                  <p>Only English</p>}
              </div>
            </div>
            <div class="col-lg-12">
              <div class="input-wrapper">
                <textarea
                  name="message"
                  rows="6"
                  class="form-control"
                  id="message"
                  placeholder="Your Message"
                  ref={register ({
                    required: true,
                    minLength: 10,
                    maxLength: 100,
                    pattern: /^[A-Za-z0-90-9,!#$%&'*+/=?^_`{|}~-\s]+$/i,
                  })}
                />
                {errors.message &&
                  errors.message.type === 'required' &&
                  <p>This is required</p>}
                {errors.message &&
                  errors.message.type === 'minLength' &&
                  <p>This is field required min length of 10</p>}
                {errors.message &&
                  errors.message.type === 'maxLength' &&
                  <p>This is field required max length of 100</p>}
                {errors.message &&
                  errors.message.type === 'pattern' &&
                  <p>Only English</p>}
              </div>
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
