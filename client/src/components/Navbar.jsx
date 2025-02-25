import { Link, useLocation } from "react-router-dom";
import azlogo from "../assets/AZ logo/azlogo.png";

function Navbar() {
  const location = useLocation();
  return (
    <>
      <nav className="bg-[#091017]  flex justify-between items-center px-20">
        <section>
          <img src={azlogo} className="w-60" alt="AZ Group logo" />
        </section>
        <section className="flex gap-12">
          <Link
            className={
              location.pathname !== "/"
                ? "py-1 px-4 text-white border border-white rounded-full"
                : "py-1 px-4 text-black bg-white border border-black rounded-full"
            }
            to="/"
          >
            Home
          </Link>

          <Link
            className={
              location.pathname !== "/services"
                ? "py-1 px-4 text-white border border-white rounded-full"
                : "py-1 px-4 text-black bg-white border border-black rounded-full"
            }
            to="/services"
          >
            Services
          </Link>

          <Link
            className={
              location.pathname !== "/gallery"
                ? "py-1 px-4 text-white border border-white rounded-full"
                : "py-1 px-4 text-black bg-white border border-black rounded-full"
            }
            to="/gallery"
          >
            Gallery
          </Link>

          <Link
            className={
              location.pathname !== "/about"
                ? "py-1 px-4 text-white border border-white rounded-full"
                : "py-1 px-4 text-black bg-white border border-black rounded-full"
            }
            to="/about"
          >
            About
          </Link>

          <Link
            className={
              location.pathname !== "/contact"
                ? "py-1 px-4 text-white border border-white rounded-full"
                : "py-1 px-4 text-black bg-white border border-black rounded-full"
            }
            to="/contact"
          >
            Contact
          </Link>
        </section>
      </nav>
    </>
  );
}

export default Navbar;
