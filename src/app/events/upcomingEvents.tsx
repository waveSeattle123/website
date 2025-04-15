"use client";
import React from 'react';
import EventCard from './eventCard';

interface EventData {
  name: string;
  description: string;
  imagePath: string;
  impact: string;
  date: string;
}

const upcomingEventsData: EventData[] = [];

export default function UpcomingEvents() {
  return (
    <div className="w-full py-8">
      <div className="mx-4 mb-4">
        <div className="bg-black/80 rounded-xl p-6">
          <h2 className="text-5xl title-font text-white mb-3">Upcoming Events</h2>
          <div className="h-0.5 w-full bg-gradient-to-r from-blue-400 via-blue-300 to-transparent mb-6"></div>
          
          {upcomingEventsData.length > 0 ? (
            <div className="flex flex-wrap -mx-4">
              {upcomingEventsData.map((event, index) => (
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
          ) : (
            <div className="bg-black/60 rounded-xl p-8 border border-blue-400/50 text-center">
              <h3 className="text-3xl title-font text-blue-300 mb-4">No Upcoming Events Currently Scheduled</h3>
              <p className="text-white text-xl mb-4">
                We&apos;re planning exciting new events for our community. Check back soon for updates!
              </p>
              <p className="text-white text-lg">
                Want to stay informed? Follow us on social media or 
                <a href="/contact" className="text-blue-300 hover:text-blue-400 transition-colors ml-1">
                  contact us
                </a>.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}