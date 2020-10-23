import React from 'react';
import MainContent from '../../components/main_content/main_content';
import Clients from '../../components/clients/clients';
import Footer from '../../components/footer/Footer';
import FindUs from '../../components/findus/find-us';


export default class Contact extends React.Component {
  render () {
    return (
    <div>
    <MainContent h2={"LET’S GET IN TOUCH"} h4={"CONTACT US"} className={"page-heading contact-heading header-text"}  />
    <FindUs />
    <Clients />
    <Footer />
    </div>
    );
  }
}
