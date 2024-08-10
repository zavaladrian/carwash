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
            <h2 className="text-center  text-6xl p-2 mt-2 font-light ">
              {" "}
              <span className="font-bold">Why Choose</span> Us?
            </h2>
            <p className="text-center text-wrap text-2xl">
              We are family-owned and operated. Rest assured, we are registered
              as an LLC and covered with insurance. Customer service is our #1
              priority.
            </p>
          </div>
          <div className="col-span-1 mx-10 text-xl">
            <div>2k-detail is committed to offering the highest level of service. With over a decade of detailing experience and work as a chemist formulating products in the car care industry, our expertise in car care will take your vehicle to the next level. </div>
            <div> We are family-owned and operated. Rest assured, we are registered as an LLC and covered with insurance. Customer service is our #1 priority.</div>
          </div>
          <div className="col-span-2">
            <img src="./photos/truck.png" alt="car" className=" h-auto w-auto p-2 shadow-xl shadow-black" />
          </div>     
        </div>
        <Prices />
        <Upgrades />
          {/* <div className=" w-auto text-center space-y-7 bg-slate-500/40 p-10">
            <section className="bg-white p-5">
              <h2 className="text-9xl p-2 font-serif">Contact Us</h2>
              <button className="text-3xl rounded-xl bg-red-500 p-2 font-bold hover:bg-rose-400">Click Here</button>
            </section>
          </div> */}
      </main>
    </div>
  );
}
