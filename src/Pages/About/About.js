import React from 'react';
import BestFeatures from '../../components/best-features/best-features';
import Footer from '../../components/footer/Footer';
import MainContent from '../../components/main_content/main_content';
import OurTeam from '../../components/our_team/our_team';




export default class About extends React.Component {
    render() {
        return ( 
            <div>
            <MainContent h2="OUR COMPANY" h4="ABOUT US"/>  
            <BestFeatures />
            <OurTeam />
            <Footer />
            </div>
         
    );
}
}

