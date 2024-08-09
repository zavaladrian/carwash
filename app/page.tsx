'use client'
import Hero from "./components/Hero";
import Prices from "./components/services";
import Upgrades from "./components/upgrades";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <div className="grid grid-cols-3 ">
          <div className="col-span-3 mx-44 ">
            <h2 className="text-center  text-6xl p-2 font-light ">
              {" "}
              <span className="font-bold">Why Choose</span> Us?
            </h2>
            <p className="text-center text-wrap">
              We are family-owned and operated. Rest assured, we are registered
              as an LLC and covered with insurance. Customer service is our #1
              priority.
            </p>
          </div>
          <div className="col-span-1">
            <div>2k-detail is committed to offering the highest level of service. With over a decade of detailing experience and work as a chemist formulating products in the car care industry, our expertise in car care will take your vehicle to the next level. </div>
            <div> We are family-owned and operated. Rest assured, we are registered as an LLC and covered with insurance. Customer service is our #1 priority.</div>
          </div>
          <div className="col-span-2">
            <img src="./photos/car.png" alt="car" className=" h-20 w-20" />
          </div>     
        </div>
        <Prices />
        <Upgrades />
        <div className=" w-screen text-center space-y-7 ">
              <h2 className="text-9xl">Contact Us</h2>
              <button className="text-3xl rounded-xl bg-red-500 p-2">Click here</button>
        </div>
      </main>
    </div>
  );
}
