import Footer from "../components/Footer";
import { FiArrowUpRight } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4 md:px-8">
          <header className="text-center mb-12 mt-11 items-center justify-center flex flex-col">
            <img src="https://ik.imagekit.io/ankiiisharma/LOGO%202.png?updatedAt=1729870676653" className="w-[200px] flex items-center justify-center" />
            <h1 className="text-5xl font-bold text-sky-600 mb-4">
              About FF Competitive
            </h1>
            <p className="text-lg text-gray-700 font-semibold">
              Asia's Biggest Free Fire Based Media Outlet
            </p>
          </header>


          <section className="bg-white p-8 rounded-lg shadow-md mb-8 mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Journey</h2>
            <p className="text-gray-600">
              Since February 2021, we've been on a mission to deliver the latest news and engaging content for Free Fire fans. Starting as a passionate community on Instagram, we've grown into a leading source for Indian and Global Free Fire esports news and media.
            </p>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-md mb-8 mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">What We Do</h2>
            <div className="space-y-4 text-gray-600">
              <div>
                <h3 className="font-bold">📢 Indian & Global News:</h3>
                <p>Stay updated on all the latest happenings in the Indian and global Free Fire scene, from tournament announcements to player transfers.</p>
              </div>
              <div>
                <h3 className="font-bold">📊 Expert Analysis:</h3>
                <p>Our experts provide in-depth breakdowns of matches, strategies, and player performances to help you enhance your skills.</p>
              </div>
              <div>
                <h3 className="font-bold">📖 Compelling Features:</h3>
                <p>Discover the stories of Free Fire players and teams, showcasing their journeys, challenges, and successes.</p>
              </div>
              <div>
                <h3 className="font-bold">🌍 Community Hub:</h3>
                <p>Join a vibrant community where Free Fire fans from India and around the world connect, discuss, and share their passion for esports.</p>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-md mb-8 mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Recognition</h2>
            <p className="text-gray-600">
              Honored as the Best News and Media Outlet by the Free Fire Asian Guild Awards, we are dedicated to excellence and serving the global Free Fire community.
            </p>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-md mb-8 mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Prestigious Team</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li><strong>Ankit Sharma:</strong> Co-Owner & Execution Lead</li>
              <li><strong>Tejas Hadas:</strong> Co-Owner & Content Lead</li>
            </ul>
          </section>
       <div className="flex justify-center"> 
       <button className="flex items-center text-white bg-sky-600 py-2 px-5 rounded-md border" onClick={()=>navigate('/blogs')}>  <FiArrowUpRight/> go to homepage </button> 
       </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
