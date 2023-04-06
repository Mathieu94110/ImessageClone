import React from "react";
import Image from "next/image";
import MetaImg from "../../../public/meta-logo-1.png";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

function Header() {
  const session = false;
  if (session)
    return (
      <header className="sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm">
        <div className="flex space-x-2">
          <Image
            className="rounded-full mx-2 object-contain"
            height={10}
            width={50}
            src={MetaImg}
            alt="Profile picture"
          />
          <div>
            <p className="text-blue-400">Connecté en tant que:</p>
            <p className="font-bold text-lg">Mathieu Enault</p>
          </div>
        </div>
        <LogoutButton />
      </header>
    );

  return (
    <header className="sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm">
      <div className="flex flex-col items-center space-y-5">
        <div className="flex space-x-2 items-center">
          <Image src={MetaImg} height={50} width={250} alt="Logo" />
          <p className="text-blue-400">Bienvenue sur Meta Messanger</p>
        </div>
        <Link
          href="/auth/signin"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Se connecter
        </Link>
      </div>
    </header>
  );
}

export default Header;
