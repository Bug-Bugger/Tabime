import logo from "@assets/tabime.svg";
import Image from "next/image";

export default function Header() {
  return (
    <h1 className="h-auto fixed w-full z-40">
      <div className="p-6 mx-auto flex items-center">
        <Image
          src={logo}
          alt="Tabime_logo"
          className="w-12 h-12 hover:rotate-180 ease-in-out transition-all duration-500"
        />
        <div className="text-3xl font-sans font-semibold ml-2">Tabime</div>
      </div>
    </h1>
  );
}
