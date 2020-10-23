import React from "react";
import Member from "./Member";
import specialistsData from "./SpecialistsData";

export default function OurTeam() {
  const specialistsComponents = specialistsData.map((specialist) => (
    <Member
      key={specialist.id}
      fio={specialist.fio}
      specialization={specialist.specialization}
      img={specialist.img}
      description={specialist.description}
    />
  ));

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
  );
}
