"use client";
import React from 'react';
import PersonCard from './personCard';

export default function ExecBoard() {
  const executives = [
    {
      name: "Sanjana Medikurthi",
      role: "Founder & President",
      imagePath: "/team/sanjana.png",
      roleInfo: "The President crafts and executes strategic plans to help the organization fulfill its mission. Their leadership and vision are crucial in fostering a positive and inclusive enviornment and keeping everyone motivated. The President also represents the organization to the public, volunteers, and partners, in addition to working directly with the Seattle Children's Hospital."
    },
    {
      name: "Moksh Doshi",
      role: "Vice President",
      imagePath: "/team/moksh.png",
      roleInfo: "The Vice President works closely with the President to advance the organization's missions and objectives. They play a crucial role in crafting strategic plans and bringing innovative ideas that improve team collaboration and project efficiency. The Vice President's contributions extend to fundraising efforts, organization efficiency, and managing human resource tasks such as training and performance."
    },
    {
      name: "Lahari Nellore",
      role: "Secretary",
      imagePath: "/team/lahari.png",
      roleInfo: "The Secretary maintains the smooth operation of the organization by maintaining detailed records, files, and databases. They play an active role in document preparation, editing, report generation, and presentation creation. During meetings, the Secretary takes meeting minutes and ensures that the board and volunteers recieve relevant agendas, enhancing the efficiency of WAVE."
    },
    {
      name: "Bhuvan Garjala",
      role: "Treasurer",
      imagePath: "/team/bhuvan.png",
      roleInfo: "The Treasurer spearheads the organization's development and implementation of financial strategy, taking charge of tasks like budgeting, forecasting, and long-term planning. They consistently provide accurate and timely financial reports to the board and advisors, offering valuble insights that shed light on the organization's financial health and performance."
    },
    {
      name: "Sahasra Voruganti",
      role: "Social Media Manager",
      imagePath: "/team/sahasra.png",
      roleInfo: "The Social Media Manager brings a resourceful and innovative approach to their position. They effectively plan and schedule social media posts to maintain an active and captivating online presence. They contribute significantly to developing a cohesive social media strategy that supports broader marketing goals, utilizing analytics to monitor performance metrics and gauge the effectiveness of WAVE's social media campaigns."
    }
  ];

  return (
    <div className="w-full pt-4 pb-6">
      <div className="mx-4 mb-2">
        <div className="bg-black/80 rounded-xl p-8">
          <div className="text-center mb-10">
            <h2 className="text-5xl md:text-6xl title-font title-color mb-4">Executive Board</h2>
            <div className="h-0.5 w-1/2 mx-auto bg-gradient-to-r from-blue-400 via-blue-300 to-transparent"></div>
          </div>
          
          <div className="flex flex-wrap justify-center">
            {executives.map((exec, index) => (
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