"use client";
import React from 'react';
import PersonCard from './personCard';

export default function AdminBoard() {
  const admins = [
    {
        name: "Laasya Chintamani",
        role: "Head of Development",
        imagePath: "/waveLogo.png",
        roleInfo: "The Head of Development develops and implements a comprehensive fundraising strategy aligned with the organization's missions and goals. They supervise and lead the development team, offering guidance and support while also representing the organization at community events and networking opportunities. The role involves building strong relationships with community leaders, influencers, and potential partners to futher WAVE's mission and impact.",
      },
      {
        name: "Samina Ali",
        role: "Head of Community Outreach",
        imagePath: "/team/samina.jpeg",
        roleInfo: "The Head of Community Outreach actively develops and executes outreach programs, events, and initiatives to engage the community, demonstrating strong communication and interpersonal skills. They provide regular reports to the leadership team on the progress and impact of community outreach efforts, while also identifying and cultivating partnerships with other nonprofits, businesses, and government agencies to enhance the organization's reach and effectiveness."
      },
      {
        name: "Omkar Page",
        role: "Head of Technology",
        imagePath: "/team/omkar.jpeg",
        roleInfo: "The Head of Technology develops and implements a technology strategy aligned with the nonprofits mission's and goals. They oversee the selection, implementation, and maintenance of software and applications supporting the organization's programs and operations. They lead technology related projects such as this website, ensuring they are completed on time and within budget, while consistently ensuring they meet the organization's objectives."
      },
      {
        name: "Saketh Desam",
        role: "Head of Volunteer Connections",
        imagePath: "/waveLogo.png",
        roleInfo: "The Head of Volunteer Connections creates and pushes out volunteer programs in alignment with the organization's mission, overseeing the recruitment, training, and retention processes. They are dedicated to designing and maintaining onboarding procedures, as well as coordinating training sessions to equip volunteers with the essential skills and knowledge for their respective roles."
      },
  ];

  return (
    <div className="w-full -pt-1 pb-16">
      <div className="mx-4 mb-8">
        <div className="bg-black/80 rounded-xl p-8">
          <div className="text-center mb-10">
            <h2 className="text-5xl md:text-6xl title-font title-color mb-4">Administrative Board</h2>
            <div className="h-0.5 w-1/2 mx-auto bg-gradient-to-r from-blue-400 via-blue-300 to-transparent"></div>
          </div>
          
          <div className="flex flex-wrap justify-center">
            {admins.map((exec, index) => (
              <PersonCard 
                key={index}
                name={exec.name}
                role={exec.role}
                imagePath={exec.imagePath}
                roleInfo={exec.roleInfo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}