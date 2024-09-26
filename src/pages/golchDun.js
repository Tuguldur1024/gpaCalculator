import { useState, useEffect } from "react";

const Golch = () => {
  const [numberOfStudies, setNumberofStudies] = useState([1]);
  const handlePlus = () => {
    let newStudies = numberOfStudies;
    newStudies.push(1);
    setNumberofStudies(newStudies);
  };
  const handleDelete = () => {};
  let myGPA = 0.0;
  return (
    <div className="w-screen h-screen bg-[#FE496C] flex flex-col gap-10 items-center px-10 py-20">
      <div className="relative w-[150px] h-[100px] bg-white flex items-center justify-center overflow-hidden">
        {/* Curved Zebra Stripe Background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="w-full h-[10px] bg-[#FF7F50] clip-path-curve animate-stripe"></div>
          <div className="w-full h-[10px] bg-[#FF7F50] clip-path-curve animate-stripe delay-1"></div>
          <div className="w-full h-[10px] bg-[#FF7F50] clip-path-curve animate-stripe"></div>
          <div className="w-full h-[10px] bg-[#FF7F50] clip-path-curve animate-stripe delay-1"></div>
          <div className="w-full h-[10px] bg-[#FF7F50] clip-path-curve animate-stripe"></div>
          <div className="w-full h-[10px] bg-[#FF7F50] clip-path-curve animate-stripe delay-1"></div>
          <div className="w-full h-[10px] bg-[#FF7F50] clip-path-curve animate-stripe"></div>
          <div className="w-full h-[10px] bg-[#FF7F50] clip-path-curve animate-stripe delay-1"></div>
          <div className="w-full h-[10px] bg-[#FF7F50] clip-path-curve animate-stripe"></div>
          <div className="w-full h-[10px] bg-[#FF7F50] clip-path-curve animate-stripe delay-1"></div>
        </div>

        {/* GPA Text */}
        <p className="font-black text-4xl relative z-10">{myGPA}</p>
      </div>

      <style jsx>{`
        /* Create the curved pattern */
        .clip-path-curve {
          clip-path: polygon(
            0% 60%,
            25% 70%,
            50% 60%,
            75% 50%,
            100% 60%,
            100% 100%,
            0% 100%
          );
        }

        /* Add animation to the stripes */
        .animate-stripe {
          animation: stripe-motion 5s ease-in-out infinite;
        }

        /* Slight delay for alternating stripes */
        .delay-1 {
          animation-delay: 1s;
        }

        /* Define the animation for a subtle stripe movement */
        @keyframes stripe-motion {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(10px);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>

      <div className="flex bg-white gap-10 rounded-full px-10 py-5">
        <select
          name="Дүн"
          className="px-6 border border-gray-500 rounded-full py-2"
        >
          <option selected> Дүн </option>
          <option value={4}> A / 95-100 </option>
          <option value={3.6}>A- / 90-94</option>
          <option value={3.1}> B / 85-89</option>
          <option value={2.7}> B- / 80-84</option>
          <option value={2.3}> C /75-79 </option>
          <option value={1.9}> C- /70-74 </option>
          <option value={1.4}> D /65-69 </option>
          <option value={1}> D- /60-64 </option>
          <option value={0}> F /0-59 </option>
        </select>
        <select className="px-4 border border-gray-500 rounded-full bg-white  text-xl">
          <option defaultChecked> Кредит</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </div>

      <div></div>
    </div>
  );
};

export default Golch;
