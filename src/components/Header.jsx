import logo from "../assets/tabime.svg";
export default function Header() {
  return (
    <div className="h-auto fixed w-full z-40">
      <div className="p-6 mx-auto flex items-center">
        <img src={logo} alt="Tabime" className="w-12 h-12" />
        <div className="text-3xl font-sans font-semibold ml-2">Tabime</div>
      </div>
    </div>
  );
}
