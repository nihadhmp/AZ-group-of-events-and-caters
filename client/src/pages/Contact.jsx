import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { MdLocalPhone, MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import MapComponent from "../components/MapComponent";
import LeafletMapComponent from "../components/LeafletMapComponent";
import ContactBg from "../assets/background/ContactBg.png";

function Contact() {
  return (
    <>
      <Navbar />
      <div
        className="bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${ContactBg})` }}
      >
        <div className="px-32 pt-9 ">
          <section className="flex mb-32 ">
            <div className="flex flex-col gap-5 w-1/2 ">
              <h2 className="font-trap text-6xl font-semibold ">Contact Us</h2>
              <p className="font-trap text-4xl font-medium -mb-3 ">
                Ready to plan your perfect
              </p>
              <p className="font-trap text-4xl  font-medium ">
                event & catering? Let’s connect !
              </p>
              <div className="mt-6 ml-2 flex gap-14">
                <ul className="text-4xl flex flex-col gap-16">
                  <MdLocalPhone />
                  <MdLocalPhone />
                  <MdEmail />
                  <FaLocationDot />
                  <FaLocationDot className="mt-2" />
                </ul>
                <div className="flex flex-col gap-10 pr-32 font-sans">
                  <span>
                    <p>Phone</p>
                    <a className="text-[#4286F4]">+91 8086006099</a>
                  </span>
                  <span className="mt-2">
                    <p>Phone</p>
                    <a className="text-[#4286F4]">+91 8086006099</a>
                  </span>
                  <span className="mt-2">
                    <p>Email</p>
                    <a className="text-[#4286F4] ">azgroupcaters@gmail.com</a>
                  </span>
                  <span className="mt-1">
                    <p>Address Perinthalmanna</p>
                    <a className="text-[#4286F4]">
                      W732+3GX, Cherukara - Muthukurussi Road, Kunnakkavu,
                      Muthukurussi, Kerala 679340
                    </a>
                  </span>
                  <span>
                    <p>Address Valanchery</p>
                    <a className="text-[#4286F4]">
                      Valanchery - Nilambur Rd, Moonnakal, Valanchery,
                      Pookkattiri, Kerala 676552
                    </a>
                  </span>
                </div>
              </div>

              <div className="justify-center mt-6 items-center gap-6  flex border border-white border-opacity-30 w-9/12 rounded-md bg-white bg-opacity-20">
                <div className="text-white text-4xl font-semibold font-trap">
                  Follow Us
                </div>
                <div className="justify-start  items-center gap-8 flex ">
                  <img className="size-8" src={instagram} />

                  <img className="size-11" src={youtube} />
                  <img className="size-8" src={facebook} />
                  <img className="size-8" src={linkedin} />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end ">
              <form className="bg-white flex flex-col gap-6 rounded-md text-black p-7 w-9/12">
                <h4 className="text-3xl font-trap font-semibold ">
                  Get in touch
                </h4>
                <p className=" font-sans text-xs font-light">
                  Have questions or feedback? We're here to help. Send us a
                  message, and we'll respond within 24 hours
                </p>
                <div className="flex flex-col gap-2">
                  <label className="text-sm">Name</label>
                  <input
                    placeholder="Name "
                    type="text"
                    className="text-sm border border-sla flex justify-startte-700 border-opacity-50 rounded-md  py-4 px-4"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm">Phone number</label>
                  <input
                    placeholder="Phone number "
                    type="text"
                    className="text-sm border border-sla flex justify-startte-700 border-opacity-50 rounded-md  py-4 px-4"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm">Message</label>
                  <textarea
                    placeholder="Write your Message "
                    type="text"
                    className="text-sm border  border-slate-700 border-opacity-50 h-72 rounded-md py-4 px-4"
                  />
                  <button className="text-white font-sans font-thin mt-2 bg-[#0188FB] rounded-md py-2">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </section>
          <section className="sm:flex-col  md:flex-row flex justify-center items-center ">
            <div>
              <MapComponent />
            </div>
            <div>
              <LeafletMapComponent />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
