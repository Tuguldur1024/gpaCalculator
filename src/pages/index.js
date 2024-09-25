import Link from "next/link";

const Home = () => {
  return (
    <div className="mx-auto bg-[#FE496C] px-5 py-[100px] w-screen h-screen flex flex-col items-center text-white gap-40 max-w-screen-sm justify-between">
      <p className="font-bold text-4xl"> Make Your Lover </p>
      <div className="heart bg-white"> </div>
      <style jsx>{`
        .heart {
          position: relative;
          width: 100px;
          height: 100px;
          transform: rotate(-45deg);
        }

        .heart::before,
        .heart::after {
          content: "";
          position: absolute;
          width: 100px;
          height: 100px;
          background-color: white;
          border-radius: 50%;
        }

        .heart::before {
          top: -50px;
          left: 0;
        }

        .heart::after {
          left: 50px;
          top: 0;
        }

        /* Responsive styles for larger screens */
        @media (min-width: 640px) {
          .heart {
            width: 150px;
            height: 150px;
          }
          .heart::before,
          .heart::after {
            width: 150px;
            height: 150px;
          }
          .heart::before {
            top: -75px;
            left: 12.5px; /* Adjust this to position better on larger screens */
          }
          .heart::after {
            left: 75px;
          }
        }

        @media (min-width: 1024px) {
          .heart {
            width: 200px;
            height: 200px;
          }
          .heart::before,
          .heart::after {
            width: 200px;
            height: 200px;
          }
          .heart::before {
            top: -100px;
            left: 25px; /* Adjusted positioning */
          }
          .heart::after {
            left: 100px;
          }
        }
      `}</style>
      <div className="flex flex-col gap-10">
        <Link href={"/golchDun"}>
          <button className="bg-white py-4 px-14 font-bold text-xl text-[#FE496C] rounded-full">
            Get Started
          </button>
        </Link>

        <p>
          Already in my heart?
          <Link
            className="border-b-2 border-b-slate-500 ml-2"
            href={"/surprise"}
          >
            Click Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
