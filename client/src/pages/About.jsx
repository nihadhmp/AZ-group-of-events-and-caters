import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import aboutUsHero from "../assets/aboutUsHero.png";
import aboutFirst from "../assets/aboutFirst.png";
import aboutSecond2 from "../assets/aboutSecond2.png";
import { FaLocationDot } from "react-icons/fa6";
import AboutBg from "../assets/background/AboutBg.png";

function About() {
  return (
    <>
      <Navbar />
      <div
        className=" bg-cover items-center justify-center flex flex-col"
        style={{ backgroundImage: `url(${AboutBg})` }}
      >
        <section
          className="h-[550px] my-12 w-[1360px] bg-cover bg-center rounded-xl "
          style={{ backgroundImage: `url(${aboutUsHero})` }}
        >
          <div className="w-1/3 bg-black/10 backdrop-blur-sm p-3 rounded-xl ml-[75px] mt-[230px] pl-5 text-white border border-slate-400">
            <h6 className="font-trap text-4xl font-medium">About Us</h6>
            <p className="text-2xl font-sans">
              Turning Dreams into Reality-Discover
            </p>
            <p className="text-2xl font-sans"> the Heart of Az Group</p>
          </div>
        </section>
        <section className="flex justify-center gap-20 items-center">
          <div className="pl-60">
            <div
              className="h-[380px] my-12 w-[357px] bg-cover pt-[306px] pl-[1.5px] bg-center overflow-hidden"
              style={{ backgroundImage: `url(${aboutFirst})` }}
            >
              <div className="flex flex-col border border-x-slate-500 bg-black/10 backdrop-blur-sm w-[354px] border-t-slate-600  px-5 py-2 rounded-b-lg">
                <span className="text-white font-sans">
                  AZ GROUP EVENTS & CATERS
                </span>
                <div className="flex  items-center">
                  <FaLocationDot className="text-white" />
                  <p className="text-white font-sans">PERINTHALMANNA</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col pl-10 gap-5 pr-64">
            <h6 className="text-white font-trap font-medium text-4xl py-3 underline underline-offset-[15px]">
              About Us
            </h6>
            <p className="text-white text-start font-sans ">
              Where creativity meets precision in crafting unforgettable events.
              With years of expertise in event planning and management, we
              specialize in transforming ideas into seamless and memorable
              experiences. Our team of passionate professionals is dedicated to
              delivering excellence, whether it’s a grand wedding, a corporate
              gathering, a cultural festival, or an intimate celebration. From
              concept development to flawless execution, we handle every detail
              with care, ensuring your vision comes to life effortlessly.
            </p>
            <p className="text-white text-start font-sans -mt-4">
              We believe every event has a story to tell, and we take pride in
              helping you write yours with style, innovation, and perfection.
              Trust us to turn your dreams into reality and make every moment
              count. Let’s create magic together!
            </p>
          </div>
        </section>
        <section className="flex justify-center gap-20 items-center mb-28">
          <div className="flex flex-col  gap-5 pl-60">
            <span>
              <h4 className="text-white font-trap font-medium text-4xl py-3 underline underline-offset-[15px]">
                Our Mission
              </h4>
              <p className="text-white  text-start font-sans mt-5 pr-20 ">
                To be the India’s leading Event Management Company that delivers
                high quality, value-driven services while focusing on the
                uniqueness and peculiarities of our clients’ project.
              </p>
            </span>
            <span>
              <h4 className="text-white font-trap font-medium text-4xl py-3 underline underline-offset-[15px]">
                Our Vision
              </h4>
              <p className="text-white  text-start font-sans mt-5 pr-20 ">
                To ensure client satisfaction and loyalty as we deliver personal
                and unique experiences that are beyond expectation and create
                long term loyal relationships by consistently providing
                outstanding service that creates an overall extraordinary event
                experience.
              </p>
            </span>
          </div>
          <div className="flex justify-center gap-20 items-center pr-64">
            <div
              className="h-[370px] my-12 w-[357px] bg-cover pt-[305px] bg-center rounded-t-lg border rounded-br-[90px] overflow-hidden"
              style={{ backgroundImage: `url(${aboutSecond2})` }}
            >
              <div className="flex flex-col border-t-slate-700 border bg-black/10 backdrop-blur-sm  px-5 py-2 ">
                <span className="text-white font-sans">
                  AZ GROUP EVENTS & CATERS
                </span>
                <div className="flex  items-center">
                  <FaLocationDot className="text-white" />
                  <p className="text-white font-sans ml-3">VALANCHERY</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default About;
