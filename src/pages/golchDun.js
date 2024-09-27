import { useState, useEffect } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const Golch = () => {
  const [numberOfStudies, setNumberofStudies] = useState([
    { grade: 0, credit: 0 },
  ]);
  const [totalGrade, setTotalGrade] = useState(0);

  const handlePlus = () => {
    setNumberofStudies([...numberOfStudies, { grade: 0, credit: 0 }]);
  };

  const handleGradeChange = (index, newGrade) => {
    const newStudies = [...numberOfStudies];
    newStudies[index].grade = parseFloat(newGrade);
    setNumberofStudies(newStudies);
  };

  const handleCreditChange = (index, newCredit) => {
    const newStudies = [...numberOfStudies];
    newStudies[index].credit = parseInt(newCredit, 10);
    setNumberofStudies(newStudies);
  };

  const handleDelete = (index) => {
    const newStudies = numberOfStudies.filter((_, i) => i !== index);
    setNumberofStudies(newStudies);
  };

  const calculateGPA = () => {
    const totalCredits = numberOfStudies.reduce(
      (acc, study) => acc + study.credit,
      0
    );
    const weightedSum = numberOfStudies.reduce(
      (acc, study) => acc + study.grade * study.credit,
      0
    );

    return totalCredits > 0 ? (weightedSum / totalCredits).toFixed(2) : 0.0;
  };

  const myGPA = calculateGPA();
  return (
    <div className="min-h-[1500px] bg-[#FE496C] flex flex-col gap-10 items-center px-10 py-10">
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
      <div className="flex flex-col gap-5">
        {numberOfStudies.map((study, index) => {
          return (
            <div
              key={index}
              className="flex bg-white gap-5 rounded-full px-3 py-2"
            >
              <select
                name="Дүн"
                className="px-6 border border-gray-500 rounded-full py-2 text-xl"
                onChange={(e) => handleGradeChange(index, e.target.value)}
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
              <select
                className="px-4 border border-gray-500 rounded-full bg-white  text-xl"
                onChange={(e) => handleCreditChange(index, e.target.value)}
                value={study.credit}
              >
                <option defaultChecked> Кредит</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
              <div
                className="w-full flex items-center"
                onClick={() => handleDelete(index)}
              >
                <FaRegTrashAlt size={25} />
              </div>
            </div>
          );
        })}
      </div>

      <div
        onClick={() => handlePlus()}
        className="mt-7 bg-white rounded-[50px] px-5 py-5"
      >
        <FaPlus size={30} />
      </div>
    </div>
  );
};

export default Golch;
