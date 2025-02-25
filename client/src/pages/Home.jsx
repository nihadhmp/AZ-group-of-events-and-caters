import Navbar from "../components/Navbar";
// import bgFirst from "../assets/bgFirst.png";
import Footer from "../components/Footer";
import HomeOne from "../assets/HomeOne.png";
import HomeTwo from "../assets/HomeTwo.png";
import HomeThree from "../assets/HomeThree.png";
import HomeFour from "../assets/HomeFour.png";
import { Link } from "react-router-dom";
import HomeBg from "../assets/background/HomeBg.png";

function Home() {
  return (
    <div className="w-screen">
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
        <section className="text-white font-medium flex flex-col justify-center items-center gap-20">
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
          <Link className="py-2 px-4 rounded-full ">View All Services</Link>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
