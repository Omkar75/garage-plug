import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
const FromCompnent = () => {
  const router = useRouter();
  const User = true;
  return (
    <section id="provided_Services">
      <div className="p-2 text-center">
        <span className=" grid grid-flow-row mx-auto container md:grid md:grid-cols-3 gap-4">
          <Link href="/breakdown">
            <a className="border-2 p-10"></a>
          </Link>

          <Link href="/costofservice">
            <a className="border-2 p-10">Cost Of Service</a>
          </Link>
          <Link href="/accesswise">
            <a className="border-2 p-10">Accessvise Service</a>
          </Link>
        </span>
      </div>
    </section>
  );
};

export default FromCompnent;
