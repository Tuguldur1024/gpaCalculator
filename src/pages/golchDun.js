import { useState, useEffect } from "react";

const Golch = () => {
  const [numberOfStudies, setNumberofStudies] = useState([1]);
  let myGPA = 0.0;
  return (
    <div className="w-screen h-screen bg-[#FE496C] flex flex-col gap-10 items-center px-10 py-20">
      <div className="relative w-[150px] h-[100px] bg-[#FE496C] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-stripes opacity-40"></div>
        <p className="font-black text-4xl relative z-10 text-white">{myGPA}</p>
      </div>
      <style jsx>{`
        .bg-stripes {
          background-image: linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.3) 25%,
              transparent 25%
            ),
            linear-gradient(225deg, rgba(128, 0, 128, 0.4) 25%, transparent 25%);
          background-size: 20px 20px; /* Adjust for stripe width */
          background-position: 0 0, 0 0;
        }
      `}</style>

      <div> </div>
    </div>
  );
};

export default Golch;
