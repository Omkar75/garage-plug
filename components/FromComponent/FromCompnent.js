import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
const FromCompnent = () => {
  const router = useRouter();
  const User = "hello";
  const redirect = (e) => {
    let formName = e.target.name;
    if(!User){
      router.push('/login')
    }else if(formName === "breakdown"){
      router.push('/breakdown')
    }else if(formName === "costofservice"){
      router.push('/costofservice')
    }else if(formName === "accesswise"){
      router.push('/accesswise')
    }
  }
  return (
    <section id="provided_Services">
      <div className="p-2 text-center my-16">
        <span className=" grid grid-flow-row mx-auto container md:grid md:grid-cols-3 gap-4">
          <button className="border-2 p-10" name="breakdown" onClick={(e)=>redirect(e)}>BreakDown Service</button>
          <button className="border-2 p-10" name="costofservice" onClick={(e)=>redirect(e)}>Cost of Service</button>
          <button className="border-2 p-10" name="accesswise" onClick={(e)=>redirect(e)}>Accesswise</button>
        </span>
      </div>
    </section>
  );
};

export default FromCompnent;
