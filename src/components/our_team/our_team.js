import React from 'react';
import team01 from '../../assets/images/team_01.jpg';
import team02 from '../../assets/images/team_02.jpg';
import team03 from '../../assets/images/team_03.jpg';
import team04 from '../../assets/images/team_04.jpg';
import team05 from '../../assets/images/team_05.jpg';
import team06 from '../../assets/images/team_06.jpg';
import Member from './member';

const worker = [
    {id:1,
     name: "Johnny William", 
     specialization: "CO-Founder",
     text:'Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.' },
    { id:2,
      name: "Karry Pitcher",
      specialization: "Product Expert",
      text:'Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.' },
     { id:3,
       name: "Michael Soft",
       specialization: "Chief Marketing",
       text:'Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.' },
     { id:4,
       name: "Mary Cool",
       specialization: "Product Specialist",
       text:'Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.' },
      { id:6,
        name: "George Walker",
        specialization: "Product Photographer",
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.' },
     { id:7,
       name: "Kate Town",
       specialization: "General Manager",
       text:'Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.' },
  ];

  const numbers = ['Маша Ковалева', 2, 3, 4, 5, 6];
  const listItems = numbers.map((number) =>
  <li>{number}</li>
);
export default class OurTeam extends React.Component {
 
    render() {
   
        return ( 
            
          <ul>{listItems}</ul>
            
      
    
    

        )
    }
}
