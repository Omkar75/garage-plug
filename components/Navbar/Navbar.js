import React from "react";
import localstyles from "./Navbar.module.css";
import Link from "next/link";
const Navbar = () => {
  const login = () => {};
  const register = () => {
    console.log("register");
  };
  const services = () => {
    console.log("services");
  };
  return (
    <div className={localstyles.header}>
        <Link href='/'>
        <a className={localstyles.header_title}>
        <img src="icon.svg" alt="Grarage Plug"></img>
      </a>
        </Link>
      
      <div className={localstyles.header_action}>
        <>
          <Link href="#provided_Services" replace={true}>
            <a className={localstyles.header_link} onClick={services}>
              services
            </a>
          </Link>

          <Link href="/login">
            <a className={localstyles.header_link}>Login</a>
          </Link>
        </>
      </div>
    </div>
  );
};

export default Navbar;
