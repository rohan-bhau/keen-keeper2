import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { PiInstagramLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] text-center pt-20 px-5">
      <div>
        <h2 className="text-4xl md:text-6xl font-bold text-[#ffffff] mb-4">KeenKeeper</h2>
        <p className="text-[#ffffff] mb-6 text-md">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <h2 className="text-[#ffffff] mb-4">Social Links</h2>
        <ul className="flex justify-center mb-10">
          <li className="hover:bg-white hover:text-rose-600 rounded-full flex items-center cursor-pointer">
            <GrInstagram className="w-8 h-8 p-2 text-white hover:text-rose-600" />{" "}
          </li>
          <li className="hover:bg-white hover:text-blue-600 rounded-full flex items-center cursor-pointer">
            <FaFacebookF className="w-8 h-8 p-2 text-white hover:text-blue-600" />{" "}
          </li>
          <li className="hover:bg-white hover:text-black rounded-full flex items-center cursor-pointer">
            <BsTwitterX className="w-8 h-8 p-2 text-white hover:text-black" />{" "}
          </li>
        </ul>
      </div>

      <div className="lg:flex justify-between container mx-auto text-[#ffffff] border-t border-[#1A8862] p-6">
        <p>&copy; 2026 KeenKeeper. All rights reserved.</p>
        <ul className="flex gap-3">
          <li className="hover:text-orange-500 cursor-pointer">
            Privacy Policy
          </li>
          <li className="hover:text-orange-500 cursor-pointer">
            Teams of Service
          </li>
          <li className="hover:text-orange-500 cursor-pointer">Cookies</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
