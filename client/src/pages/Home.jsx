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
import HomeVideo1 from "../assets/HomeVideo1.png";
import HomeVideo2 from "../assets/HomeVideo2.png";
import HomeVideo3 from "../assets/HomeVideo3.png";
import HomeVideo4 from "../assets/HomeVideo4.png";
import HomeHero1 from "../assets/HomeHero1.png";

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
          <div
            className="bg-cover bg-center w-screen h-screen "
            style={{ backgroundImage: `url(${HomeHero1})` }}
          ></div>
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
          <div className="grid grid-cols-2 gap-10">
            <img src={HomeVideo1} />
            <img src={HomeVideo2} />
            <img src={HomeVideo3} />
            <img src={HomeVideo4} />
          </div>
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
            Learn More About Us
          </Link>
        </section>
        <section className=" text-white font-medium flex flex-col justify-center items-center pb-40 px-40 gap-20">
          <h1 className="w-[700px] text-center leading-normal font-trap text-5xl">
            Contact Us for Unforgettable Events & Caters
          </h1>
          <div className=" flex items-end gap-10">
            <p className="text-3xl pr-1 w-1/2 leading-normal  ">
              Let Az Group make your event unforgettable! From flawless planning
              to exquisite catering, we handle every detail to perfection.
              Contact us today and let’s create memorable experiences together.
              Your dream event is just a message away!
            </p>
            <div className="w-[520px] h-[225px] border flex flex-col justify-center items-center border-white border-opacity-30 rounded-md bg-black bg-opacity-20 mb-4">
              <div className="px-10">
                <p className="font-trap text-4xl font-medium ">
                  Ready to plan your perfect event?
                </p>
                <p className="font-trap text-4xl font-medium text-[#FFDB0D]">
                  Let’s connect!
                </p>
              </div>
              <div className="flex gap-10">
                <button className=" px-6 py-2 bg-[#0188fb] border border-[#0188fb] hover:bg-black hover:bg-opacity-20 hover:text-[#0188fb] rounded-full justify-center items-center gap-2.5 flex">
                  <MdLocalPhone className="text-white text-2xl" />

                  <div className="text-white text-xl font-medium font-sans">
                    Call Az group
                  </div>
                </button>
                <button className="px-6 py-2 bg-[#25d366] border border-[#25d366] hover:bg-black hover:bg-opacity-20 hover:text-[#25d366] rounded-full justify-center items-center gap-2.5 flex">
                  <FaWhatsapp className="text-white text-xl " />

                  <div className="text-white text-xl font-medium font-sans">
                    Whatsapp Us
                  </div>
                </button>
              </div>
            </div>
          </div>
          <Link
            to="/about"
            className="py-2 px-4 rounded-full text-xl text-black font-medium font-sans bg-[#FFDB0D] hover:bg-black hover:text-[#FFDB0D] border border-[#FFDB0D]"
          >
            Get a Free Quote
          </Link>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
