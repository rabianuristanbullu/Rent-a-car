import React from "react";
import { Link } from "react-router-dom";
import CustomButon from "./CustomButton";
const Header = () => {
  return (
    <header className="absolute w-full z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center px-6 sm:px-16 py-4">
        <Link to={"/"}>
          <img width={50} src="/bmw.png" />
        </Link>

        <CustomButon
          title="Kaydol"
          designs="bg-primary-blue rounded-full min-w-[130px] cursor-pointer "
        />
      </nav>
    </header>
  );
};

export default Header;
