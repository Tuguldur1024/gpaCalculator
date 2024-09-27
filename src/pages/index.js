import Link from "next/link";

const Home = () => {
  return (
    <div className="mx-auto bg-[#FE496C] px-5 py-[60x] w-screen h-screen flex flex-col items-center text-white gap-16 max-w-screen-sm justify-between">
      <p className="font-bold text-4xl mt-10"> Make Your Lover </p>
      <img src="/heart.png" />
      <div className="flex flex-col gap-10">
        <Link href={"/golchDun"}>
          <button className="bg-white py-4 px-14 font-bold text-xl text-[#FE496C] rounded-full">
            Get Started
          </button>
        </Link>

        <p className="mb-10">
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
