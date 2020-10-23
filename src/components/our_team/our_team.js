import React from 'react';
import team01 from '../../assets/images/team_01.jpg';
import team02 from '../../assets/images/team_02.jpg';
import team03 from '../../assets/images/team_03.jpg';
import team04 from '../../assets/images/team_04.jpg';
import team05 from '../../assets/images/team_05.jpg';
import team06 from '../../assets/images/team_06.jpg';
import Member from './member';




export default function OurTeam() {
      
        return ( 
          <div class="team-members">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-heading">
            <h2>Our Team Members</h2>
          </div>
        </div>
          
          <Member 
          h4 = "Johnny William"
          specialization = "CO-Founder"
          text = "Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla."
          img = {team01}
          />
          
          <Member
          h4 = "Karry Pitcher"
          specialization = "Product Expert"
          text = "Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla."
          img = {team02}
          />
          <Member
          h4 = "Michael Soft"
          specialization = "Chief Marketing"
          text = "Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla."
          img = {team03}
          />

          <Member
          h4 = "Mary Cool"
          specialization = "Product Specialist"
          text = "Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla."
          img = {team04}
          />

          <Member
          h4 = "George Walker"
          specialization = "Product Photographer"
          text = "Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla."
          img = {team05}
          />

          <Member
          h4 = "Kate Town"
          specialization = "General Manager"
          text = "Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla."
          img = {team06}
          />

</div>
      </div>
    </div>
    

        )
    
}
