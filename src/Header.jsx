import globe from "./assets/main_logo.svg";

export default function Header() {
  return (
    <nav className="bg-[#F55A5A] flex justify-center items-center gap-2 py-6 text-red-50 text-3xl w-full">
      <img
        src={globe}
        alt="An outline of globe which serves as the websites icon"
      />
      <h2 className="font-semibold">My Travel Journal</h2>
    </nav>
  );
}
