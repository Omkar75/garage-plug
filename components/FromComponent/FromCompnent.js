import Link from "next/link";
import React from "react";
import { Transition } from "@headlessui/react";
//import { Link } from "react-scroll";

const FromCompnent = () => {
  return (
    <section id="provided_Services">
<div className="p-2 text-center ">
      <span className=" grid grid-flow-row mx-auto container md:grid md:grid-cols-3 gap-4">
        
        <Link href="/breakdown"><a className="border-2 p-10 bg-yellow-50 cursor-pointer hover:bg-green-600 text-black hover:text-white  rounded-md text-sm font-medium">BreakDown Service</a></Link>
        
        <Link href="/costofservice"><a className="border-2 p-10 bg-yellow-50 cursor-pointer hover:bg-green-600 text-black hover:text-white  rounded-md text-sm font-medium">Cost Of Service</a></Link>
        <Link href="/accesswise"><a className="border-2 p-10 bg-yellow-50 cursor-pointer hover:bg-green-600 text-black hover:text-white  rounded-md text-sm font-medium">Accessvise Service</a></Link>
      </span>
    </div>
    </section>
    
  );
};

export default FromCompnent;
