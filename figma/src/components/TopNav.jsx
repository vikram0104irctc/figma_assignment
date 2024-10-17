import { IoIosArrowDown } from "react-icons/io";
import "./topnav.css"
export const TopNav = () => {
  return (
    <div
      className="topnavcon w-full z-50 bg-[#1D2026]
                fixed top-0 left-0  text-xs text-[#8C94A3]"
    >
      <div className="max-w-[1400px] m-auto p-4 flex justify-between ">
        <div className="flex gap-10">
          <p className="text-[#ffffff]">Home</p>
          <p>Courses</p>
          <p>About</p>
          <p>Contact</p>
          <p>Become a instructor</p>
        </div>
        <div className="flex gap-6">
          <div className="flex gap-1 justify-center items-center">
            <p>USD</p>
            <span>
              <IoIosArrowDown />
            </span>
          </div>
          <div className="flex gap-1 justify-center items-center">
            <p>English</p>
            <span>
              <IoIosArrowDown />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
