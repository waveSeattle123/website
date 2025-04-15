import Image from 'next/image';
import EventsTitle from './eventsTitle';
import Navbar from '../../components/navbar';
import PastEvents from './pastEvents';
import UpcomingEvents from './upcomingEvents';

export default function Events() {
    return (
        <div className="relative min-h-screen">
            <div className="fixed inset-0 z-0">
                <Image 
                    src="/events/events_1.jpg" 
                    alt="Background" 
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50"/>
            </div>
            
            <Navbar />
            <div className="relative z-10">
                <EventsTitle />
                
                <div className="space-y-4">  
                    <div className="-mt-10">
                        <UpcomingEvents />
                    </div>
                    <div className="-mt-21">
                        <PastEvents />
                    </div>
                </div>
            </div>
        </div>
    );
}