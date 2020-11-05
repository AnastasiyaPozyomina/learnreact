import React, {Component} from 'react';
import FormSend from '../FormSend/FormSend';
import CustomizedAccordions from '../Accordion/Accordion';

export default class SendMessage extends Component {
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
                <FormSend />
              </div>
              <div class="col-md-4">
               <CustomizedAccordions   />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
