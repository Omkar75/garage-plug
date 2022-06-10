import Link from "next/link";
import React from "react";

const FromCompnent = () => {
  return (
    <section id="provided_Services">
<div className="p-2 text-center">
      <span class=" grid grid-flow-row mx-auto container md:grid md:grid-cols-3 gap-4">
        
        <Link href="/breakdown"><a className="border-2 p-10">BreakDown Service</a></Link>
        
        <Link href="/costofservice"><a className="border-2 p-10">Cost Of Service</a></Link>
        <Link href="/accesswise"><a className="border-2 p-10">Accessvise Service</a></Link>
      </span>
    </div>
    </section>
    
  );
};

export default FromCompnent;
