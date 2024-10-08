'use client'



export default function Heros() {


  return (
    <div className="bg-gray-900">

      <div className="relative isolate overflow-hidden pt-14">
        <img
          alt="background"
          src='./photos/truck.png'
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
   
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight font-pacifico text-white sm:text-9xl">
              <span className='md:text-9xl'>2</span>k-Detail 
            </h1>
            <p className="mt-6  text-lg leading-8 text-gray-300">
              Serving Lemont, IL & Surrounding Areas
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/appointment"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Get started
              </a>
              <a href="/about" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
     
      </div>
    </div>
  )
}
