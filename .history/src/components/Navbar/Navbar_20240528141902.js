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


// // import React from 'react';

// // const Navbar = () => {
// //   return (
// //     <div className="m-[6px_0_7px_0] flex flex-row justify-between w-[800.9px] h-[fit-content] box-sizing-border">
// //       <div className="flex items-center">
// //         <img src='https://d2fedaqd9kwzub.cloudfront.net/website/_next/static/media/logo.1cc68d72.svg' alt="Logo" className="h-[fit-content]" />
// //       </div>
// //       <div className="flex flex-row space-x-3">
        
// //         <a href="#footer" className="m-[0_13.5px_0_0] w-[750.5px] break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">
// //           KOIReader
// //         </a>
// //         <a href="#integrations" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">
// //           Integrations
// //         </a>
// //         <a href="#awards" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">
// //           Awards
// //         </a>
// //         <a href="#about" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">
// //           About
// //         </a>
// //         <a href="#blog" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">
// //           Blog
// //         </a>
// //         <a href="#contact" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">
// //           Contact
// //         </a>
// //         <a href="#contact" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">
// //           Contact
// //         </a>
// //         <a href="#contact" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">
// //           Contact
// //         </a>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Navbar;



// import React from 'react';
// import image from '../../assets/images/logo.svg';

// const Navbar = () => {
//   return (
//     <div className="shadow-[1px_1px_5px_0px_rgba(0,0,0,0.25)] bg-[#FFFFFF] flex flex-row justify-between p-[5.5px_90.4px_5.5px_95.6px] w-full box-sizing-border">
//       {/* Logo KOIREADER */}
//       <div className="flex items-center">
//         <img className="h-[40px] mr-4" src={image} alt="Logo" />
//         <div className="flex flex-row">
//           <span className="break-words font-['Inter'] font-light text-[24.9px] leading-[1.446] text-[#535050]">K</span>
//           <span className="break-words font-['Inter'] font-light text-[24.9px] leading-[1.446] text-[#535050] ml-1">OI</span>
//           <div className="inline-block break-words font-['Inter'] font-light text-[21.4px] leading-[1.402] text-[#535050]">EADER</div>
//           {/* <span className="absolute left-[16px] bottom-[1.5px] break-words font-['Inter'] font-light text-[21.4px] leading-[1.402] text-[#535050]">OI</span> */}
//         </div>
//       </div>
//       {/* Navigation Elements */}
//       <div className="flex flex-row space-x-8">
//         <a href="#footer" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">Solutions</a>
//         <a href="#integrations" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">Integrations</a>
//         <a href="#awards" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">Awards</a>
//         <a href="#about" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">About</a>
//         <a href="#blog" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">Blog</a>
//         <a href="#contact" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">Contact Us</a>
//       </div>
//     </div>
//   );
// }

// export default Navbar;





import React from 'react';
import image from '../../assets/images/logo.svg';

const Navbar = () => {
  return (
    <div className="shadow-[1px_1px_5px_0px_rgba(0,0,0,0.25)] bg-[#FFFFFF] flex justify-between p-[5.5px_90.4px_5.5px_95.6px] w-full box-sizing-border">
      {/* Logo KOIREADER */}
      <div className="flex items-center">
        <img className="h-[40px] mr-4" src={image} alt="Logo" />
        <div className="flex flex-row">
          <span className="break-words font-['Inter'] font-light text-[24.9px] leading-[1.446] text-[#535050]">K</span>
          <span className="break-words font-['Inter'] font-light text-[24.9px] leading-[1.446] text-[#535050] ml-1">OI</span>
          <div className="inline-block break-words font-['Inter'] font-light text-[21.4px] leading-[1.402] text-[#535050]">EADER</div>
          {/* <span className="absolute left-[16px] bottom-[1.5px] break-words font-['Inter'] font-light text-[21.4px] leading-[1.402] text-[#535050]">OI</span> */}
        </div>
      </div>
      {/* Navigation Elements */}
      <div className="flex flex-row space-x-8">
        <a href="#footer" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">Solutions</a>
        <a href="#integrations" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">Integrations</a>
        <a href="#awards" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">Awards</a>
        <a href="#about" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">About</a>
        <a href="#blog" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">Blog</a>
        <a href="#contact" className="break-words font-['Inter'] font-medium text-[17.9px] leading-[1.508] uppercase text-[#535050]">Contact Us</a>
      </div>
    </div>
  );
}

export default Navbar;
