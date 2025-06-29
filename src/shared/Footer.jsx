import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="bg-base-200">
      <div className="footer footer-horizontal footer-center   p-10">
        <aside>
          <img src={logo} alt="logo" className="w-1/7" />
          <p className="font-bold text-xl">Car Rental</p>
          <p className="flex flex-col md:flex-row gap-3 font-semibold">
            <span>Phone: +001258795</span>
            <span>Email: car-rental@gmail.com</span>
          </p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4 ">
            <button>
              <FaFacebookF
                className="p- bg-black cursor-pointer p-2 rounded-full "
                color="#fff"
                size={40}
              />
            </button>
            <button>
              <FaLinkedinIn
                className="p- bg-black cursor-pointer p-2 rounded-full "
                color="#fff"
                size={40}
              />
            </button>
            <button>
              <BsTwitterX
                className="p- bg-black cursor-pointer p-2 rounded-full "
                color="#fff"
                size={40}
              />
            </button>
            <button>
              <IoLogoYoutube
                className="p- bg-black cursor-pointer p-2 rounded-full "
                color="#fff"
                size={40}
              />
            </button>
          </div>
        </nav>
      </div>
      <p className="text-center sm:font-normal py-2  ">
        Copyright © {new Date().getFullYear()} - All right reserved by
        car-rental.org
      </p>
    </div>
  );
};

export default Footer;
