import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ServicesHero from "../assets/ServicesHero.png";
import ServicesOne from "../assets/ServicesOne.png";
import ServicesTwo from "../assets/ServicesTwo.png";
import ServicesThree from "../assets/ServicesThree.png";
import ServicesFour from "../assets/ServicesFour.png";
import ServicesBg from "../assets/background/ServicesBg.png";

function Services() {
  return (
    <>
      <Navbar />
      <div
        className=" bg-cover bg-center items-center justify-center flex flex-col"
        style={{ backgroundImage: `url(${ServicesBg})` }}
      >
        <section
          className="h-[550px] my-12 w-[1360px] bg-cover bg-center rounded-xl "
          style={{ backgroundImage: `url(${ServicesHero})` }}
        >
          <div className="w-[530px] bg-black/10 backdrop-blur-sm p-3 rounded-xl ml-[75px] mt-[230px] pl-5 text-white border border-slate-400">
            <h6 className="font-trap text-4xl font-medium">Our Services</h6>
            <p className="text-2xl font-sans">
              Exceptional Services Tailored for Your Perfect
            </p>
            <p className="text-2xl font-sans">
              Event—Experience the Az Group Difference
            </p>
          </div>
        </section>
        <section className="text-white flex flex-col gap-24 px-40 mt-10 mb-40">
          <div className="flex gap-14">
            <img src={ServicesOne} />
            <span className="pr-8">
              <h2 className="text-3xl font-trap font-medium underline-offset-[20px] underline mb-10">
                1. Event Planing
              </h2>
              <p>
                Planning an event is exciting but can be overwhelming without
                the right support. Our event planning services ensure your
                vision becomes a reality. From weddings and corporate events to
                birthdays and private celebrations, we manage every detail with
                care. Our services include venue selection, vendor coordination,
                scheduling, and on-the-day management. With a personalized
                approach and attention to detail, we make your event seamless
                and stress-free. Trust us to bring your ideas to life while you
                enjoy the special moments.
              </p>
            </span>
          </div>
          <div className="flex gap-14">
            <span className="pr-8">
              <h2 className="text-4xl font-trap font-medium underline-offset-[20px] underline mb-10">
                2. Catering
              </h2>
              <p>
                Food is the heart of every event, and we ensure it leaves a
                lasting impression. Our catering services include a variety of
                culinary delights crafted by experienced chefs. Whether you’re
                hosting an intimate dinner or a large-scale banquet, we offer
                customizable menus featuring local and international cuisines.
                From starters to desserts, every dish is prepared using fresh,
                high-quality ingredients. We also accommodate dietary
                restrictions and preferences, including vegan, gluten-free, and
                allergy-friendly options. Let us create a dining experience your
                guests will rave about!
              </p>
            </span>
            <img src={ServicesTwo} />
          </div>
          <div className="flex gap-14">
            <img src={ServicesThree} />
            <span className="pr-8">
              <h2 className="text-4xl font-trap font-medium underline-offset-[20px] underline mb-10">
                3. Decorations
              </h2>
              <p>
                Set the tone for your event with our exceptional decoration
                services. We specialize in creating stunning visuals that match
                your style and theme. From dreamy wedding setups with floral
                arches and fairy lights to modern corporate decor with sleek
                aesthetics, we ensure every detail is perfect. Our services
                include centerpieces, backdrops, lighting design, table
                settings, and more. Whether you’re aiming for elegance, whimsy,
                or bold creativity, we’ll transform your venue into a
                picture-perfect setting your guests will love.
              </p>
            </span>
          </div>
          <div className="flex gap-14">
            <span className="pr-8">
              <h2 className="text-4xl font-trap font-medium underline-offset-[20px] underline mb-10">
                4. Additional Services
              </h2>
              <p>
                We offer a range of additional services to ensure your event
                runs smoothly and exceeds expectations. Our entertainment
                coordination includes live bands, DJs, and performers to keep
                your guests engaged. We assist with venue selection to match
                your event's theme and needs. Our rental options cover
                everything from tables and chairs to audio-visual equipment.
                Professional event staffing ensures everything operates
                seamlessly. With our added features, such as photo booths and
                custom props, your event will be truly unforgettable
              </p>
            </span>
            <img src={ServicesFour} />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Services;
