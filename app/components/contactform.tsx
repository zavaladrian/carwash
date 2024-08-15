"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";


const ContactForm: React.FC = () => {
  // Typing the ref with HTMLFormElement
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      // Collect selected checkbox values
      const selectedAddons: string[] = [];
      const checkboxes = form.current.querySelectorAll('input[name="addon"]:checked') as NodeListOf<HTMLInputElement>;
      checkboxes.forEach((checkbox) => {
        selectedAddons.push(checkbox.value);
      });

      // Prepare email parameters
      const templateParams = {
        user_name: form.current.user_name.value,
        user_email: form.current.user_email.value,
        phone_number: form.current.phone_number.value,
        car_make: form.current.car_make.value,
        car_year: form.current.car_year.value,
        car_model: form.current.car_model.value,
        user_package: form.current.user_package.value,
        addons: selectedAddons.join(', '),
        message: form.current.message.value,
      };

      // Send email using EmailJS
      emailjs
        .send("service_hn1dk3q", "template_tkhhg4g", templateParams, "XpzFB5BaOHBtQXtSJ")
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b-2 border-gray-900/10 pb-12 md:grid-cols-3 p-9 bg-white border-t-2 border-gray-600 ">
        <div className="space-y-12">
          <h2 className="text-3xl lg:text-5xl">Schedule an Appointment</h2>
          <p>
            We are an appointment-only service serving Lemont, IL and
            surrounding areas. Please use the form for appointment requests,
            questions, or comments
          </p>
          <p>2kdetailservice@gmail.com</p>
          <span>(630) 640-4874</span>- call or text
          <p>Located near Historic Downtown Lemont, Illinois</p>
        </div>

        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                id="user_name"
                name="user_name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md border-o py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="phone-number"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
             Phone Number
            </label>
            <div className="mt-2">
              <input
                id="phone_number"
                name="phone_number"
                type="text"
                autoComplete="phone-number"
                className="block w-full rounded-md border-o py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-6">
            <label
              htmlFor="user_email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="user_email"
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
                id="car_make"
                name="car_make"
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
                id="car_year"
                name="car_year"
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
                id="car_model"
                name="car_model"
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
              id="user_package"
              name="user_package"
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

          <div className="sm:col-span-3" id="addon">
          <fieldset>
            <legend className="text-base font-semibold leading-6 text-gray-900">
              Any Upgrades?
            </legend>
            <div className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
              {[
                { id: "trim_restoration", name: "Trim Restoration" },
                { id: "interior_steam_clean", name: "Interior Steam Clean" },
                { id: "engine_bay_detail", name: "Engine Bay Detail" },
                { id: "headlight_restoration", name: "Headlight Restoration" }
              ].map((addon) => (
                <div key={addon.id} className="relative flex items-start py-4">
                  <div className="min-w-0 flex-1 text-sm leading-6">
                    <label
                      htmlFor={addon.id}
                      className="select-none font-medium text-gray-900"
                    >
                      {addon.name}
                    </label>
                  </div>
                  <div className="ml-3 flex h-6 items-center">
                    <input
                      id={addon.id}
                      value={addon.name} // Value now represents the addon name
                      name="addon"
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
      <div className="mt-6 mb-2 flex items-center justify-end gap-x-6 pr-2 bg-white">
        <button
          type="submit"
          value="Send"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
