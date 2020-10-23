import React from 'react';
import team01 from '../../assets/images/team_01.jpg';
import team02 from '../../assets/images/team_02.jpg';
import team03 from '../../assets/images/team_03.jpg';
import team04 from '../../assets/images/team_04.jpg';
import team05 from '../../assets/images/team_05.jpg';
import team06 from '../../assets/images/team_06.jpg';
import SocialIcons from '../social-icons/social-icons';

export default class Member extends React.Component {
    render() {
        return ( 
            
              <div className="row">
                <div className="col-md-12">
                  <div className="section-heading">
                    <h2>Our Team Members</h2>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="team-member">
                    <div className="thumb-container">
                      <img src={team01} alt=""/>
                      <div className="hover-effect">
                        <div className="hover-content">
                        <SocialIcons />
                        </div>
                      </div>
                    </div>
                    <div className="down-content">
                      <h4>Johnny William</h4>
                      <span>CO-Founder</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
                    </div>
                  </div>
                </div>
          
              </div>
           
      
    
    

        )
    }
}
