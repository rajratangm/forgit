// import React from 'react';
// import image from '../../assets/images/logo.svg'

// const Navbar = () => {
//   return (
//     <div className="shadow-[1px_1px_5px_0px_rgba(0,0,0,0.25)] bg-[#FFFFFF] flex flex-row justify-between p-[5.5px_90.4px_5.5px_95.6px] w-full box-sizing-border">
//       <div className="flex flex-row box-sizing-border">
//         <div className="m-[0_7px_0_0] flex w-[25.9px] h-[40px] box-sizing-border">
//           <img className="w-[25.9px] h-[40px]" src={image} alt="Logo" />
//         </div>
//         <div className="relative m-[1.5px_0_2.5px_0] flex box-sizing-border">
//           <div className="relative flex flex-row box-sizing-border">
//             <span className="m-[0_21.3px_0_0] break-words font-['Inter'] font-light text-[24.9px] leading-[1.446] text-[#535050]">
//               K
//             </span>
//             <span className="m-[0_1.7px_0_0] break-words font-['Inter'] font-light text-[24.9px] leading-[1.446] text-[#535050]">
//               R
//             </span>
//             <div className="m-[4.5px_0_1.5px_0] inline-block break-words font-['Inter'] font-light text-[21.4px] leading-[1.402] text-[#535050]">
//               EADER
//             </div>
//           </div>
//           <span className="absolute left-[16px] bottom-[1.5px] break-words font-['Inter'] font-light text-[21.4px] leading-[1.402] text-[#535050]">
//             OI
//           </span>
//         </div>
//       </div>
//       <div className="m-[6px_0_7px_0] flex flex-row justify-between w-[860.9px] h-[fit-content] box-sizing-border">
//         <a href="#footer" className="m-[0_13.5px_0_0] w-[154.5px] break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">
//           Solutions
//         </a>
//         <a href="#integrations" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">
//           Integrations
//         </a>
//         <a href="#awards" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">
//           Awards
//         </a>
//         <a href="#about" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">
//           About
//         </a>
//         <a href="#blog" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">
//           Blog
//         </a>
//         <a href="#contact" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">
//           Contact us
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Navbar;


// import React from 'react';

// const Navbar = () => {
//   return (
//     <div className="m-[6px_0_7px_0] flex flex-row justify-between w-[800.9px] h-[fit-content] box-sizing-border">
//       <div className="flex items-center">
//         <img src='https://d2fedaqd9kwzub.cloudfront.net/website/_next/static/media/logo.1cc68d72.svg' alt="Logo" className="h-[fit-content]" />
//       </div>
//       <div className="flex flex-row space-x-3">
//         <a href="#footer" className="m-[0_13.5px_0_0] w-[750.5px] break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">
//           KOIReader
//         </a>
//         <a href="#integrations" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">
//           Integrations
//         </a>
//         <a href="#awards" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">
//           Awards
//         </a>
//         <a href="#about" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">
//           About
//         </a>
//         <a href="#blog" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">
//           Blog
//         </a>
//         <a href="#contact" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">
//           Contact
//         </a>
//         <a href="#contact" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">
//           Contact
//         </a>
//         <a href="#contact" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">
//           Contact
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { FaAsterisk } from "@react-icons/all-files/fa/FaAsterisk";
import logo from '../../assets/images/logo.svg';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="shadow-[1px_1px_5px_0px_rgba(0,0,0,0.25)] bg-[#FFFFFF] flex flex-row justify-between p-[5.5px_90.4px_5.5px_95.6px] w-full box-sizing-border">
      <div className="flex flex-row box-sizing-border">
        <div className="m-[0_7px_0_0] flex w-[25.9px] h-[40px] box-sizing-border">
          <img className="w-[25.9px] h-[40px]" src={logo} alt="Logo" />
        </div>
        <div className="relative m-[1.5px_0_2.5px_0] flex box-sizing-border">
          <div className="relative flex flex-row box-sizing-border">
            <span className="m-[0_21.3px_0_0] break-words font-['Inter'] font-light text-[24.9px] leading-[1.446] text-[#535050]">
              K
            </span>
            <span className="m-[0_1.7px_0_0] break-words font-['Inter'] font-light text-[24.9px] leading-[1.446] text-[#535050]">
              R
            </span>
            <div className="m-[4.5px_0_1.5px_0] inline-block break-words font-['Inter'] font-light text-[21.4px] leading-[1.402] text-[#535050]">
              EADER
            </div>
          </div>
          <span className="absolute left-[16px] bottom-[1.5px] break-words font-['Inter'] font-light text-[21.4px] leading-[1.402] text-[#535050]">
            OI
          </span>
        </div>
      </div>
      <div className="m-[6px_0_7px_0] flex flex-row justify-between w-[860.9px] h-[fit-content] box-sizing-border">
        <a href="#footer" className="m-[0_13.5px_0_0] w-[154.5px] break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">
          Solutions
        </a>
        <a href="#integrations" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">
          Integrations
        </a>
        <a href="#awards" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">
          Awards
        </a>
        <a href="#about" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">
          About
        </a>
        <a href="#blog" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">
          Blog
        </a>
        <a href="#contact" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">
          Contact us
        </a>
      </div>
      <div className="bg-slate-400 p-5">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-medium">
            KOI<span className="text-green-600">READER</span>
          </h1>
          {toggle ? <FaAsterisk className="menu sm:hidden block" onClick={() => setToggle(!toggle)} /> : <FaBars className="menu sm:hidden block" onClick={() => setToggle(!toggle)} />}
          <ul className="sm:flex lg:gap-20 md:gap-10 sm:gap-5 hidden mx-10 text-xl">
            <li className="nav">Home</li>
            <li className="nav">About</li>
            <li className="nav">Project</li>
            <li className="nav">Page</li>
            <li className="nav">Contact</li>
          </ul>
          <ul className={`duration-500 sm:hidden text-xl fixed top-[77px] bg-black text-white w-full text-center border-4 ${toggle ? ' right-[0%]' : ' right-[-100%]'}`}>
            <li className="s-nav">Home</li>
            <li className="s-nav">About</li>
            <li className="s-nav">Project</li>
            <li className="s-nav">Page</li>
            <li className="s-nav">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
