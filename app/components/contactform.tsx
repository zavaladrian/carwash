import React from "react";

const ContactForm = () => {

  const addons = [
    { id: 1, name: 'Trim Restoration' },
    { id: 2, name: 'Interior Steam Clean' },
    { id: 3, name: 'Engine Bay Detail' },
    { id: 4, name: 'Headlight Restoration' },
   
  ]

  return (
    <form>
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3 p-9 bg-white ">

        <div className="space-y-12">
          <h2 className="text-3xl lg:text-5xl">Schedule an Appointment</h2>
          <p>
            We are an appointment-only service serving Lemont, IL and
            surrounding areas. Please use the form for appointment requests,
            questions, or comments
          </p>
          <p >2kdetailservice@gmail.com</p>
          <span>(630) 640-4874</span>- call or text
      
          <p>Located near Historic Downtown Lemont, Illinois</p>
        </div>

        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First Name
            </label>
            <div className="mt-2">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md border-o py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Last Name
            </label>
            <div className="mt-2">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md border-o py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="car-make"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Car Make
            </label>
            <div className="mt-2">
              <input
                id="car-make"
                name="car-make"
                type="text"
                className="block w-full rounded-md border-o py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="car-year"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Car Year
            </label>
            <div className="mt-2">
              <input
                id="car-year"
                name="car-year"
                type="text"
                className="block w-full rounded-md border-o py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="car-model"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Car Model
            </label>
            <div className="mt-2">
              <input
                id="car-model"
                name="car-model"
                type="text"
                className="block w-full rounded-md border-o py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="packages"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Which Package would you Like
            </label>
            <select
              id="package"
              name="package"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>Basic Package</option>
              <option>Plus Package</option>
              <option>Premium Package</option>
              <option>Paint Correction</option>
              <option>Ceramic Coating</option>
              <option>Ceramic Coating 2</option>
            </select>
          </div>
          <div className="sm:col-span-3">
          <fieldset>
      <legend className="text-base font-semibold leading-6 text-gray-900">Any Upgrades?</legend>
      <div className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
        {addons.map((a, personIdx) => (
          <div key={personIdx} className="relative flex items-start py-4">
            <div className="min-w-0 flex-1 text-sm leading-6">
              <label htmlFor={`person-${a.id}`} className="select-none font-medium text-gray-900">
                {a.name}
              </label>
            </div>
            <div className="ml-3 flex h-6 items-center">
              <input
                id={`a-${a.id}`}
                name={`a-${a.id}`}
                type="checkbox"
                className="h-4 w-4 rounded border-gray-700 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
          </div>
        ))}
      </div>
    </fieldset>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="message"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2">
              <textarea
                id="message"
                name="message"
                rows={3}
                className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              {" "}
              Any additional information
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6 pr-2 bg-white">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
