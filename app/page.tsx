import Logo from "@/app/assets/images/easy-grid-logo.svg";

export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="max-w-screen-md bg-white flex flex-col items-center rounded-3xl p-20 shadow-[0px_5px_10px_rgba(0,0,0,0.06)]">
        <Logo />
        <h1 className="font-bold text-5xl text-grey leading-normal">
          EasyGrid
        </h1>
        <p className="italic text-xs">Made learning CSS Grid easier!</p>
        <p className="my-4 text-center text-sm pt-5">
          Welcome to EasyGrid!
          <br />
          EasyGrid is a free course designed to help you learn and master CSS
          Grid. Each lesson is paired with interactive puzzles and challenges,
          allowing you to practice and apply what you’ve learned in real time.
        </p>
        <button className="bg-green-500 rounded-3xl py-2 px-10 text-white text-sm font-semibold mt-5">
          Let's Begin!
        </button>
      </div>
    </div>
  );
}
