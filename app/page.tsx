import Logo from "@/app/assets/images/easy-grid-logo.svg";

export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="max-w-screen-md bg-white flex flex-col items-center rounded-3xl p-20 shadow-[0px_5px_10px_rgba(0,0,0,0.06)]">
        <Logo />
        <h1 className="font-bold text-6xl text-grey">EasyGrid</h1>
        <p className="italic">Made learning CSS Grid easier!</p>
        <p className="my-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five.
        </p>
        <button className="bg-green-500 rounded-3xl py-2 px-10 text-white">
          Let's Begin!
        </button>
      </div>
    </div>
  );
}
