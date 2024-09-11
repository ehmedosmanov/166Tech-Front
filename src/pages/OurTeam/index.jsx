import React from "react";
import PageTitle from "../../components/UI/PageTitle";
import teamMember from "../../assets/our-team/team-member-image.png";
import TeamMemberCard from "../../components/UI/TeamMemberCard";
import './index.scss'

const OurTeam = () => {
  const members = [
    {
      memberImage: teamMember,
      memberName: "Jane Doe",
      memberPosition: "Hüquq şöbəsinin rəhbəri",
    },
    {
      memberImage: teamMember,
      memberName: "Jane Doe",
      memberPosition: "Hüquq şöbəsinin rəhbəri",
    },
    {
      memberImage: teamMember,
      memberName: "Jane Doe",
      memberPosition: "Hüquq şöbəsinin rəhbəri",
    },
    {
      memberImage: teamMember,
      memberName: "Jane Doe",
      memberPosition: "Hüquq şöbəsinin rəhbəri",
    },
    {
      memberImage: teamMember,
      memberName: "Jane Doe",
      memberPosition: "Hüquq şöbəsinin rəhbəri",
    },
  ];

  return (
    <section className="our-team-page">
      <div className="container">
        <PageTitle title="Komandamız" />

        <div className="team-members">

            {
                members.map((member,index)=>(
                    <div key={index}>
                        <TeamMemberCard {...member} />
                    </div>
                ))
            }

        </div>
      </div>
    </section>
  );
};

export default OurTeam;
