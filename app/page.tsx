'use client'
import Hero from "./components/Hero";
import Prices from "./components/services";
import Upgrades from "./components/upgrades";
import ContactForm from "./components/contactform";



export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
     
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">   <span className="font-bold">Why Choose</span> Us?.</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
                We are family-owned and operated. Rest assured, we are registered
              as an LLC and covered with insurance. Customer service is our #1
              priority.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            alt="App screenshot"
            src="./photos/truck.png" 
            width={2432}
            height={1442}
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
          />
          <div aria-hidden="true" className="relative">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        2k-detail is committed to offering the highest level of service. With over a decade of detailing experience and work as a chemist formulating products in the car care industry, our expertise in car care will take your vehicle to the next level.  We are family-owned and operated. Rest assured, we are registered as an LLC and covered with insurance. Customer service is our #1 priority.
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
          
          <ContactForm />
      </main>
    </div>
  );
}
