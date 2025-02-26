import Navbar from "../components/Navbar";
// import bgFirst from "../assets/bgFirst.png";
import Footer from "../components/Footer";
import HomeOne from "../assets/HomeOne.png";
import HomeTwo from "../assets/HomeTwo.png";
import HomeThree from "../assets/HomeThree.png";
import HomeFour from "../assets/HomeFour.png";
import HomeFive from "../assets/HomeFive.png";
import HomeSix from "../assets/HomeSix.png";
import HomeSeven from "../assets/HomeSeven.png";
import { Link } from "react-router-dom";
import HomeBg from "../assets/background/HomeBg.png";
import { FaWhatsapp } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";

function Home() {
  return (
    <div className="">
      <Navbar />
      <div
        className=" bg-cover bg-center "
        style={{ backgroundImage: `url(${HomeBg})` }}
      >
        {" "}
        <section className=" flex flex-row">
          <div className="items-center ">
            <h2 className="text-white text-7xl font-trap"></h2>
          </div>
          <div className="">
            <img className="" />
          </div>
        </section>
        <section className="text-white font-medium flex flex-col justify-center items-center gap-20 mb-40">
          <h1 className="font-trap text-5xl">Our Services</h1>
          <div className="flex gap-5">
            <div className="w-[300px] flex flex-col gap-5">
              <img src={HomeOne} />
              <h4 className="text-4xl font-medium font-trap">Event Planning</h4>
              <p className="pr-2">
                Seamless organization of weddings, corporate events, and
                celebrations.
              </p>
            </div>
            <div className="w-[300px] flex flex-col gap-5">
              <img src={HomeTwo} />
              <h4 className="text-4xl font-medium font-trap">Catering</h4>
              <p className="pr-2">
                Custom menus with fresh, flavorful dishes for every occasion.
              </p>
            </div>
            <div className="w-[300px] flex flex-col gap-5">
              <img src={HomeThree} />
              <h4 className="text-4xl font-medium font-trap">Decorations</h4>
              <p className="pr-2">
                Stunning, personalized decor to transform any venue.
              </p>
            </div>
            <div className="w-[320px] flex flex-col gap-5">
              <img src={HomeFour} />
              <h4 className="text-4xl font-medium font-trap">
                Additional Services
              </h4>
              <p className="pr-4">
                Entertainment, rentals, venues, and staffing solutions.
              </p>
            </div>
          </div>
          <Link
            to="/services"
            className="py-2 px-4 rounded-full text-xl text-black font-medium font-sans bg-[#FFDB0D] hover:bg-black hover:text-[#FFDB0D] border border-[#FFDB0D]"
          >
            View All Services
          </Link>
        </section>
        <section className="text-white font-medium flex flex-col justify-center items-center mb-40 gap-20">
          <h1 className="w-[500px] text-center leading-normal font-trap text-5xl">
            Memorable Moments by Az Group
          </h1>
          <div></div>
          <Link
            to="/gallery"
            className="py-2 px-4 rounded-full text-xl text-black font-medium font-sans bg-[#FFDB0D] hover:bg-black hover:text-[#FFDB0D] border border-[#FFDB0D]"
          >
            See Our Portfolio
          </Link>
        </section>
        <section className=" text-white font-medium flex flex-col justify-center items-center mb-40 gap-20">
          <h1 className="w-[500px] text-center  font-trap text-5xl">
            About Us
          </h1>
          <div className="flex gap-10 w-[950px] mr-14">
            <img src={HomeFive} />
            <div className="flex flex-col gap-10">
              <p className="text-3xl leading-normal">
                Emphasizing experience, professionalism, and creativity in event
                management and catering.
              </p>
              <div className="flex gap-10">
                <img src={HomeSix} />
                <img src={HomeSeven} />
              </div>
            </div>
          </div>
          <Link
            to="/about"
            className="py-2 px-4 rounded-full text-xl text-black font-medium font-sans bg-[#FFDB0D] hover:bg-black hover:text-[#FFDB0D] border border-[#FFDB0D]"
          >
            Learn More About
          </Link>
        </section>
        <section className=" text-white font-medium flex flex-col justify-center items-center  gap-20">
          <h1 className="w-[700px] text-center leading-normal font-trap text-5xl">
            Contact Us for Unforgettable Events & Caters
          </h1>
          <div>
            <p className="text-3xl">
              Let Az Group make your event unforgettable! From flawless planning
              to exquisite catering, we handle every detail to perfection.
              Contact us today and let’s create memorable experiences together.
              Your dream event is just a message away!
            </p>
            <div>
              <p>Ready to plan your perfect event? Let’s connect! </p>
              <div>
                {" "}
                <button className=" px-6 py-2 bg-[#0188fb] border border-[#0188fb] hover:bg-[#2D2E30] hover:text-[#0188fb] rounded-full justify-center items-center gap-2.5 flex">
                  <MdLocalPhone className="text-white text-2xl" />

                  <div className="text-white text-xl font-medium font-sans">
                    Call Az group
                  </div>
                </button>
                <button className="px-6 py-2 bg-[#25d366] border border-[#25d366] hover:bg-[#2D2E30] hover:text-[#25d366] rounded-full justify-center items-center gap-2.5 flex">
                  <FaWhatsapp className="text-white text-xl " />

                  <div className="text-white text-xl font-medium font-sans">
                    Whatsapp Us
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
