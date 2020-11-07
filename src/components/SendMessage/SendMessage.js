import React, {Component} from 'react';
import CustomizedAccordions from '../Accordion/Accordion';
import ContactForm from '../ContactForm/ContactForm';

export default class SendMessage extends Component {
  render () {
    return (
      <div>
        <div className="send-message">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2>Send us a Message</h2>
                </div>
              </div>
              <div className="col-md-8">
                <ContactForm />
              </div>
              <div className="col-md-4">
               <CustomizedAccordions   />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
