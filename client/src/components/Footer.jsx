import { FaWhatsapp } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import azEvent from "../assets/AZ logo/azEvent.png";
import AZNAMELOGO from "../assets/AZ logo/AZNAMELOGO.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";

function Footer() {
  return (
    <div className=" h-[430px] relative bg-[#2D2E30]  overflow-hidden font-sans">
      <div className="w-[702px] left-[495px] top-[192px] absolute justify-start items-start gap-[204px] inline-flex">
        <div className="w-[62px] flex-col justify-start items-start  inline-flex">
          <div className="self-stretch text-white text-xl font-semibold mb-1 font-sans  ">
            Pages
          </div>
          <div className="self-stretch h-[95px] flex-col justify-start items-start  flex ">
            <div className="self-stretch text-white text-base font-normal ">
              Home
            </div>
            <div className="self-stretch text-white text-base font-normal ">
              Services
            </div>
            <div className="self-stretch text-white text-base font-normal ">
              Gallery
            </div>
            <div className="self-stretch text-white text-base font-normal ">
              About
            </div>
            <div className="self-stretch text-white text-base font-normal ">
              Contact
            </div>
          </div>
        </div>
        <div className="w-[142px] h-[109px] relative">
          <div className="w-[79px] h-5  absolute text-white text-xl font-semibold ">
            Services
          </div>
          <div className="w-[142px] h-[74px] left-0 top-[35px] absolute flex-col justify-start items-start gap-3 inline-flex">
            <div className="self-stretch h-[11px] text-white text-base font-normal ">
              Event Planning
            </div>
            <div className="self-stretch h-[11px] text-white text-base font-normal">
              Catering
            </div>
            <div className="self-stretch h-[11px] text-white text-base font-normal ">
              Decorations
            </div>
            <div className="self-stretch h-[11px] text-white text-base font-normal ">
              Additional Services
            </div>
          </div>
        </div>
        <div className="w-[89px] flex-col justify-start items-start font-sans inline-flex">
          <div className="self-stretch text-white text-xl font-semibold mb-1 ">
            About Us
          </div>
          <div className="self-stretch h-[53px] flex-col justify-start items-start  flex">
            <div className="self-stretch text-white text-base font-normal ">
              About
            </div>
            <div className="self-stretch text-white text-base font-normal ">
              Our Mission
            </div>
            <div className="self-stretch text-white text-base font-normal ">
              Our vision
            </div>
          </div>
        </div>
      </div>
      <div className="left-[589px] top-[385px] absolute text-white text-xs font-normal">
        ©️ Copyright Az group 2024. All Rights Reserved.
      </div>
      <div className="w-[448px] left-[495px] top-[104px] absolute justify-start items-center gap-10 inline-flex">
        <button className=" px-6 py-2 bg-[#0188fb] rounded-full justify-center items-center gap-2.5 flex">
          <MdLocalPhone className="text-white text-2xl" />

          <div className="text-white text-xl font-medium font-sans">
            Call Az group
          </div>
        </button>
        <button className="px-6 py-2 bg-[#25d366] rounded-full justify-center items-center gap-2.5 flex">
          <FaWhatsapp className="text-white text-xl " />

          <div className="text-white text-xl font-medium font-sans">
            Whatsapp Us
          </div>
        </button>
      </div>
      <div className="left-[495px] top-[44px]  absolute text-white text-[32px] font-semibold font-trap">
        Contact Us
      </div>
      <div className="h-[365.06px] left-[80px] top-0 absolute flex-col justify-start items-start gap-[30px] flex">
        <div className="w-60 px-2 pt-6 flex flex-col justify-center items-center gap-2">
          <img className="size-20" src={azEvent} />
          <img src={AZNAMELOGO} />
        </div>
        <div className="self-stretch justify-start items-center gap-5  flex">
          <div className="text-white text-xl font-semibold font-sans">
            Follow Us
          </div>
          <div className="justify-start  items-center flex gap-4">
            <img className="w-[18.06px] h-[18.06px]" src={instagram} />

            <img className="w-[25.69px] " src={youtube} />
            <img className="w-[18.06px] h-[18.06px]" src={facebook} />
            <img className="w-[18.06px] h-[18.06px] " src={linkedin} />
          </div>
        </div>
        <div className="h-[87px] flex-col justify-start items-start gap-[15px] flex">
          <div className="self-stretch text-white text-xl font-bold font-sans">
            Contact Number
          </div>
          <div className="self-stretch h-[58px] flex-col justify-start items-start gap-2.5 flex">
            <div className="self-stretch justify-start items-center gap-[11px] inline-flex">
              <MdLocalPhone className="text-2xl text-white" />
              <div className="w-[130px] text-[#4286f4] text-base font-medium font-['Helvetica Neue']">
                +91 8086 002 099
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-[11px] inline-flex">
              <MdLocalPhone className="text-2xl text-white" />
              <div className="w-[130px] text-[#4286f4] text-base font-medium font-['Helvetica Neue']">
                +91 8086 006 099
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
