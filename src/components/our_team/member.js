import React from 'react';
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
                       <p>{props.description}</p>
                </div>
            </div>
          </div>
      
              
      
    
    

        )
    
}
