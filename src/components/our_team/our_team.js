import React from 'react';
import Member from './member';
import specialistsData from './specialistsData';




export default function OurTeam() {
  
  const specialistsComponents = specialistsData.map(specialist =>
  <Member key={specialist.id} h4={specialist.h4} specialization={specialist.specialization}  img={specialist.img} description={specialist.description} />
  )
  
        return ( 
          <div className="team-members">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2>Our Team Members</h2>
                </div>
              </div>
          {specialistsComponents}
        </div>
      </div>
    </div>
  
    
    )
}
