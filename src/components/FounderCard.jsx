// import React from 'react';

// import Tilt from 'react-parallax-tilt';

// export function FounderCard({ founder }) {
//   return (
//     <Tilt
//       glareEnable={true}
//       glareMaxOpacity={0.2}
//       glareColor="#a955f7"
//       glarePosition="all"
//       tiltMaxAngleX={8}
//       tiltMaxAngleY={8}
//       perspective={1500}
//       scale={1.02}
//       transitionSpeed={1000}
//       gyroscope={false}
//       className="w-full max-w-2xl mx-auto rounded-3xl h-full"
//     >
//       <div className="flex flex-col md:flex-row bg-[#0B0F19] border border-slate-800/60 rounded-3xl overflow-hidden shadow-2xl w-full h-full transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_15px_40px_rgba(168,85,247,0.3)]">

//         <div className="w-full md:w-[40%] aspect-square md:aspect-auto md:min-h-[300px] relative">
//           <img
//             src={founder.photo}
//             alt={founder.name}
//             className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
//           />

//           <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent to-[#0B0F19]/20 pointer-events-none" />
//         </div>


//         <div className="w-full md:w-[60%] p-4 md:p-5 flex flex-col justify-center text-left">




//           <h2 className="text-xl md:text-2xl font-extrabold text-white mb-1">{founder.name}</h2>
//           <p className="text-sm md:text-base text-purple-400 font-medium mb-2">{founder.role}</p>


//           <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-3" />


//           <p className="text-slate-300 leading-relaxed text-xs md:text-sm mb-4">
//             {founder.bio}
//           </p>
//         </div>
//       </div>
//     </Tilt>
//   );
// }

import React from 'react';

import Tilt from 'react-parallax-tilt';

export function FounderCard({ founder }) {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.2}
      glareColor="#A855F7"
      glarePosition="all"
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      perspective={1500}
      scale={1.02}
      transitionSpeed={1000}
      gyroscope={true}
      className="w-full max-w-2xl mx-auto rounded-3xl h-full flex flex-col"
    >
      <div className="flex flex-col md:flex-row bg-[#0B0F19] border border-slate-800/60 rounded-3xl overflow-hidden shadow-2xl w-full h-full flex-1 transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_15px_40px_rgba(168,85,247,0.3)]">
        <div className="relative w-full md:w-[42%] min-h-[280px] md:min-h-0 self-stretch shrink-0 overflow-hidden">
          <img
            src={founder.photo}
            alt={founder.name}
            className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent to-[#0B0F19]/20 pointer-events-none" />
        </div>

        <div className="w-full md:w-[58%] p-5 md:p-6 lg:p-7 flex flex-col justify-center text-left flex-1">
          <h2 className="text-xl md:text-2xl font-extrabold text-white mb-1">{founder.name}</h2>
          <p className="text-sm md:text-base text-purple-400 font-medium mb-2">{founder.role}</p>
          <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-3" />
          <p className="text-slate-300 leading-relaxed text-xs md:text-sm">
            {founder.bio}
          </p>
        </div>
      </div>
    </Tilt>
  );
}
