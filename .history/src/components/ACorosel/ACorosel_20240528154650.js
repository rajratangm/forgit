// import React from 'react';
// import Skills from '../Skills/Skills';

// const ACorosel = () => {
//   return (
//     <div className="bg-[#202123] flex flex-col items-center justify-center p-[47.5px_0_57.5px_0] min-h-screen w-full box-sizing-border">
//       <div className="m-[0_0_52.5px_0] flex flex-col items-center w-full box-sizing-border">
//         <div className="m-[0_5.9px_8.5px_0.5px] flex flex-row justify-center w-full box-sizing-border">
//           <div className="m-[4.5px_9.4px_3.5px_0] flex w-[41.4px] h-[64px] box-sizing-border">
//             <img className="w-[41.4px] h-[64px]" src="../assets/vectors/group_1_x2.svg" alt="Image 1" />
//           </div>
//           <div className="flex flex-row box-sizing-border">
//             <span className="break-words font-['Inter'] font-light text-[50.1px] leading-[1.437] text-[#FFFFFF]">
//               K
//             </span>
//             <div className="m-[13px_0.4px_5px_0] inline-block break-words font-['Inter'] font-light text-[37.5px] leading-[1.44] text-[#FFFFFF]">
//               OI
//             </div>
//             <span className="m-[0_3px_0_0] break-words font-['Inter'] font-light text-[50.1px] leading-[1.437] text-[#FFFFFF]">
//               R
//             </span>
//             <div className="m-[13px_0_5px_0] inline-block break-words font-['Inter'] font-light text-[37.5px] leading-[1.44] text-[#FFFFFF]">
//               EADER
//             </div>
//           </div>
//         </div>
//         <div className="bg-[linear-gradient(90deg,#30AFC0,#33CCCC,#A0E7E7,#E4F8F8,#FFFFFF)] m-[0_0_7.5px_0] w-full max-w-[280px] h-[1px]">
//         </div>
//         <div className="m-[0_0.3px_0_0] flex flex-row justify-center w-full box-sizing-border">
//           <span className="m-[0_11.7px_0_0] break-words font-['Inter'] font-normal text-[15.9px] leading-[1.509] uppercase text-[#FFFFFF]">
//             Innovate
//           </span>
//           <div className="shadow-[0px_0px_10px_2px_#30AFBF,inset_0px_0px_10px_2px_rgba(48,175,191,0.5)] rounded-[50px] bg-[#27FEFF] m-[10.5px_10.4px_9.5px_0] w-[4px] h-[4px]">
//           </div>
//           <span className="m-[0_14.1px_0_0] break-words font-['Inter'] font-normal text-[15.9px] leading-[1.509] uppercase text-[#FFFFFF]">
//             Create
//           </span>
//           <div className="shadow-[0px_0px_10px_2px_#30AFBF,inset_0px_0px_10px_2px_rgba(48,175,191,0.5)] rounded-[50px] bg-[#27FEFF] m-[10.5px_10.4px_9.5px_0] w-[4px] h-[4px]">
//           </div>
//           <span className="break-words font-['Inter'] font-normal text-[15.9px] leading-[1.509] uppercase text-[#FFFFFF]">
//             Automate
//           </span>
//         </div>
//       </div>
//       <div className="m-[0_0_62px_0] flex flex-col items-center w-full box-sizing-border">
//         {/* Content here */}
//       </div>
//       <div className="m-[0_39.3px_0_0] flex flex-row justify-between w-full max-w-[952.7px] box-sizing-border">
//         {/* Content here */}
//       </div>
//       <Skills />
//     </div>
//   );
// };

// export default ACorosel;

/* General container styles */
.acorosel-container {
  background-color: #202123;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 47.5px 0 57.5px 0;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
}

/* Title section styles */
.acorosel-title-container {
  margin: 0 0 52.5px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
}

.acorosel-title-row {
  margin: 0 5.9px 8.5px 0.5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
}

.acorosel-logo {
  margin: 4.5px 9.4px 3.5px 0;
  display: flex;
  width: 41.4px;
  height: 64px;
  box-sizing: border-box;
}

.acorosel-logo img {
  width: 41.4px;
  height: 64px;
}

.acorosel-title {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
}

.acorosel-title span,
.acorosel-title div {
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  color: #ffffff;
  word-break: break-word;
}

.acorosel-title span {
  font-size: 50.1px;
  line-height: 1.437;
  margin: 0;
}

.acorosel-title div {
  font-size: 37.5px;
  line-height: 1.44;
}

.acorosel-title .title-oi {
  margin: 13px 0.4px 5px 0;
}

.acorosel-title .title-reader {
  margin: 13px 0 5px 0;
}

/* Gradient separator styles */
.acorosel-gradient {
  background: linear-gradient(90deg, #30AFC0, #33CCCC, #A0E7E7, #E4F8F8, #FFFFFF);
  margin: 0 0 7.5px 0;
  width: 100%;
  max-width: 280px;
  height: 1px;
}

/* Subtitle section styles */
.acorosel-subtitle-row {
  margin: 0 0.3px 0 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
}

.acorosel-subtitle-row span {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 15.9px;
  line-height: 1.509;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0 11.7px 0 0;
}

.acorosel-dot {
  box-shadow: 0px 0px 10px 2px #30AFBF, inset 0px 0px 10px 2px rgba(48, 175, 191, 0.5);
  border-radius: 50px;
  background-color: #27FEFF;
  margin: 10.5px 10.4px 9.5px 0;
  width: 4px;
  height: 4px;
}

/* Placeholder content sections */
.acorosel-content {
  margin: 0 0 62px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
}

.acorosel-footer {
  margin: 0 39.3px 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 952.7px;
  box-sizing: border-box;
}

/* Skills grid styles */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 952.7px;
  width: 100%;
  box-sizing: border-box;
  margin-top: 30px;
}

.skill-item {
  background-color: #333;
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
}
