import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {

  return (
    <div 
      className="w-full py-8 px-4 sticky top-0 z-50 transition-all duration-300"
    >
      <div className="bg-black/80 rounded-xl p-8">
        <h2 className="text-6xl title-font title-color mb-10 text-center">Explore Wave Seattle</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-black/60 rounded-xl overflow-hidden hover:bg-black/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-900/30 group">
            <div className="relative h-56 overflow-hidden">              
              <Image
                src="/home/about.jpeg"
                alt="About Us"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-3xl title-font text-white mb-2">About Us</h3>
              <div className="h-0.5 w-full bg-gradient-to-r from-blue-400 via-blue-300 to-transparent my-3"></div>
              <p className="text-white text-lg mb-4">
                Learn about our mission, and the impact we're making in our community.
              </p>
              <Link href="/about" className="inline-flex items-center text-white subtitle-font group transition-all hover:text-blue-300">
                <span className="mr-2 group-hover:translate-x-1 transition-transform duration-300">Discover our story</span>
                <svg className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="bg-black/60 rounded-xl overflow-hidden hover:bg-black/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-900/30 group">
            <div className="relative h-56 overflow-hidden">            
              <Image
                src="/home/events.jpg"
                alt="Events"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-3xl title-font text-white mb-2">Events</h3>
              <div className="h-0.5 w-full bg-gradient-to-r from-blue-400 via-blue-300 to-transparent my-3"></div>
              <p className="text-white text-lg mb-4">
                Check out our upcoming and past events to stay connected with our community.
              </p>
              <Link href="/events" className="inline-flex items-center text-white subtitle-font group transition-all hover:text-blue-300">
                <span className="mr-2 group-hover:translate-x-1 transition-transform duration-300">View events</span>
                <svg className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="bg-black/60 rounded-xl overflow-hidden hover:bg-black/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-900/30 group">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/home/donate.PNG"
                alt="Donate"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-3xl title-font text-white mb-2">Donate</h3>
              <div className="h-0.5 w-full bg-gradient-to-r from-blue-400 via-blue-300 to-transparent my-3"></div>
              <p className="text-white text-lg mb-4">
                Help fund our non-profit mission and support our community.
              </p>
              <Link href="/donate" className="inline-flex items-center text-white subtitle-font group transition-all hover:text-blue-300">
                <span className="mr-2 group-hover:translate-x-1 transition-transform duration-300">Help us out</span>
                <svg className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="bg-black/60 rounded-xl overflow-hidden hover:bg-black/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-900/30 group">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/home/meet.png"
                alt="Get Involved"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-3xl title-font text-white mb-2">Meet The Team</h3>
              <div className="h-0.5 w-full bg-gradient-to-r from-blue-400 via-blue-300 to-transparent my-3"></div>
              <p className="text-white text-lg mb-4">
                Learn about our dedicated team members who make our mission possible.
              </p>
              <Link href="/team" className="inline-flex items-center text-white subtitle-font group transition-all hover:text-blue-300">
                <span className="mr-2 group-hover:translate-x-1 transition-transform duration-300">Meet us</span>
                <svg className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="bg-black/60 rounded-xl overflow-hidden hover:bg-black/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-900/30 group">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/home/volunteer.JPG"
                alt="Programs"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-3xl title-font text-white mb-2">Volunteer</h3>
              <div className="h-0.5 w-full bg-gradient-to-r from-blue-400 via-blue-300 to-transparent my-3"></div>
              <p className="text-white text-lg mb-4">
                Join us in making a difference. Volunteer with us and be part of our mission.
              </p>
              <Link href="/volunteer" className="inline-flex items-center text-white subtitle-font group transition-all hover:text-blue-300">
                <span className="mr-2 group-hover:translate-x-1 transition-transform duration-300">Sign up</span>
                <svg className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="bg-black/60 rounded-xl overflow-hidden hover:bg-black/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-900/30 group">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/home/contact.jpeg"
                alt="Contact"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-3xl title-font text-white mb-2">Contact</h3>
              <div className="h-0.5 w-full bg-gradient-to-r from-blue-400 via-blue-300 to-transparent my-3"></div>
              <p className="text-white text-lg mb-4">
                Have questions? Reach out to our team for information or support.
              </p>
              <Link href="/contact" className="inline-flex items-center text-white subtitle-font group transition-all hover:text-blue-300">
                <span className="mr-2 group-hover:translate-x-1 transition-transform duration-300">Get in touch</span>
                <svg className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}