"use client";
import React from 'react';
import EventCard from './eventCard';

const pastEventsData = [
    {
        name: "Bollywood Ball @ Lake Washington High School",
        description: "The Bollywood Ball was WAVE’s first-ever youth-only dance! With music, mocktails, and an amazing playlist, the night brought together over youth from all over Seattle to celebrate empowerment and unity.",
        imagePath: "/events/bollywood_ball_2025.JPG",
        impact: "250+ Attendees",
        date: "January 25th, 2025",
    },
    {
        name: "Dandiya Night 2024 w/ Hopes and Smiles",
        description: "In our second annual Dandiya Night collaboration, WAVE and Hopes and Smiles brought together people for a night of joy, community, and cultural pride. Proceeds supported ongoing youth mental health projects.",
        imagePath: "/events/dandiya_night_2024.jpg",
        impact: "600+ Attendees",
        date: "October 19th, 2024"
    },
    {
        name: "IACS Summer Fest Booth",
        description: "During the lively IACS Summer Fest, WAVE’s booth sold Italian Soda's to raise money for uncompensated care. It was an amazing opportunity to meet new families and grow our impact locally.",
        imagePath: "/events/IACS_booth_2024.png",
        impact: "Raised Double Our Event Goal",
        date: "June 23rd, 2024"
    },
    {
        name: "TTA Convention Booth",
        description: "WAVE was honored to host a booth at the TTA Mega Convention, connecting with thousands of community members. We spread awareness about our mission and the importance of uncompensated care.",
        imagePath: "/events/TTA_booth_2024.png",
        impact: "Educated 500+ About Our Mission",
        date: "May 24-26th, 2024"
    },
    {
        name: "IACS Diwali x WAVE",
        description: "At the annual IACS Diwali celebration, WAVE hosted a vibrant booth to engage youth in conversations about empowerment and wellness. We also shared resources and invited attendees to get involved in our mission.",
        imagePath: "/events/IACS_diwali_2023.jpeg",
        impact: "Interacted with 80% of Attendees",
        date: "November 18th, 2023"
    },
    {
        name: "Dandiya Night 2023 w/ Hopes and Smiles",
        description: "WAVE partnered with Hopes and Smiles for a festive evening filled with dance, music, and cultural celebration. The event spotlighted South Asian traditions while raising awareness for cancer research in our community.",
        imagePath: "/events/dandiya_night_2023.jpg",
        impact: "500+ Attendees",
        date: "October 20th, 2023"
    }
];

export default function PastEvents() {
    return (
        <div className="w-full py-8">
            <div className="mx-4 mb-4">
                <div className="bg-black/80 rounded-xl p-6">
                    <h2 className="text-5xl title-font text-white mb-3">Past Events</h2>
                    <div className="h-0.5 w-full bg-gradient-to-r from-blue-400 via-blue-300 to-transparent mb-6"></div>
                    
                    <div className="flex flex-wrap -mx-4">
                        {pastEventsData.map((event, index) => (
                            <EventCard
                                key={index}
                                name={event.name}
                                description={event.description}
                                imagePath={event.imagePath}
                                impact={event.impact}
                                date={event.date}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}