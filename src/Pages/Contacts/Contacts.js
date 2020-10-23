import React from 'react';
import MainContent from '../../components/main_content/main_content';
import Clients from '../../components/clients/clients';
import Footer from '../../components/footer/Footer';


export default class Contact extends React.Component {
  render () {
    return (
    <div>
    <MainContent h2="LET’S GET IN TOUCH" h4="CONTACT US"/>
    <Clients />
    <Footer />
    </div>
    );
  }
}
