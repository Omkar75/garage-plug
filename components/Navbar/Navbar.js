import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import Image from "next/image";
//import Logo from "../public/pro.ico";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<nav className=" shadow-sm fixed w-full z-10 bg-yellow-50 ">
				<div className="w-full">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center  mx-20  justify-between w-full ">
							<div className="flex justify-center items-center flex-shrink-0 ">
								<h1 className=" font-bold text-xl cursor-pointer text-black">
									Garage<span className="text-green-500">Plug</span>
								</h1>
							</div>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
									<Link
										activeClass="Home"
										to="about"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer text-green-600 font-semibold px-3 py-2 text-md hover:font-black"
									>
										Home
									</Link>
									<Link
										activeClass="about"
										to="about"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-green-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										About
									</Link>
									<Link
										activeClass="work"
										to="work"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-green-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										Projects
									</Link>

									<Link
										activeClass="Services"
										to="work"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-green-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										Services
									</Link>

									<Link
										activeClass="contact"
										to="contact"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-green-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										Contact
									</Link>

									<Link
										activeClass="sign up"
										to="sign up"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer bg-green-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black"
									>
										Sign up
									</Link>
								</div>
							</div>
						</div>
						<div className="mr-10 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-green-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
							>
								<Link
									href="/home"
									activeClass="home"
									to="home"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-green-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Home
								</Link>
								<Link
									href="/about"
									activeClass="about"
									to="about"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-green-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									About
								</Link>

								<Link
									href="/work"
									activeClass="work"
									to="work"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-green-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Projects
								</Link>
								<Link
									href="/services"
									activeClass="services"
									to="services"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-green-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Services
								</Link>

								<Link
									href="/contact"
									activeClass="work"
									to="work"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-green-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Contact
								</Link>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}

export default Navbar;



/*
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
  const contact = () => {
    console.log("Contact us");
  };
  const home = () => {
    console.log("home");
  };

  return (
    <div className={localstyles.header}>
        <Link href='/'>
        <a className={localstyles.header_title}>
        <img src="icon.png" alt="Grarage Plug"></img>
        
      </a>
        </Link>
      
      <div className={localstyles.header_action}>
        <>

        <Link href="#Home" replace={true}>
            <a className={localstyles.header_link} onClick={home}>
              Home
            </a>
          </Link>
          <Link href="#provided_Services" replace={true}>
            <a className={localstyles.header_link} onClick={services}>
              services
            </a>
          </Link>

          <Link href="#contact" replace={true}>
            <a className={localstyles.header_link} onClick={contact}>
              Contact us
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
*/