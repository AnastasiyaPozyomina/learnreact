import React from 'react';
import team01 from '../../assets/images/team_01.jpg';
import team02 from '../../assets/images/team_02.jpg';
import team03 from '../../assets/images/team_03.jpg';
import team04 from '../../assets/images/team_04.jpg';
import team05 from '../../assets/images/team_05.jpg';
import team06 from '../../assets/images/team_06.jpg';
import SocialIcons from '../social-icons/social-icons';

export default function Member(props) {
  
        return ( 
            
    
                <div className="col-md-4">
                  <div className="team-member">
                    <div className="thumb-container">
                      <img src={props.img} alt=""/>
                      <div className="hover-effect">
                        <div className="hover-content">
                        <SocialIcons />
                        </div>
                      </div>
                    </div>
                    <div className="down-content">
                      <h4>{props.h4}</h4>
                      <span>{props.specialization}</span>
                       <p>{props.text}</p>
                </div>
            </div>
          </div>
      
              
      
    
    

        )
    
}
