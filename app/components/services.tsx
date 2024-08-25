"use client";

const packages = [
  {
    id: 1,
    title: "Basic Package",
    href: "#",
    description:
      "Car hand washed w/ boars head brushes for crevices and door jambs, wheels and wheel wells deep cleaned, exterior spray coated, tires shined, and interior detailed to remove dust and contaminates.",
    img: "./photos/basic.png",
    vehicle: {
      car: "Car - $120",
      midsize: "Mid-Size- $160",
      truck: "Truck / SUV - $200",
    },
  },
  {
    id: 2,
    title: "Plus Package",
    href: "#",
    description:
      "Basic package + clay bar and iron removal on paint/wheels; this process removes bonded contaminates and deep cleans paint and wheels, allowing for longer-lasting protection from the spray coating.",
    img: "./photos/plus.png",
    vehicle: {
      car: "Car - $160",
      midsize: "Mid-Size- $220",
      truck: "Truck / SUV - $280",
    },
  },
  {
    id: 3,
    title: "Premium Package",
    href: "#",
    description:
      "Plus package + machine polish to exterior; this process removes oxidation and reduces scratches/swirls, providing a big boost in gloss. Vehicle must be on-site for this service.",
    img: "./photos/premium.png",
    vehicle: {
      car: "Car - $350",
      midsize: "Mid-Size- $450",
      truck: "Truck / SUV - $600",
    },
  },
  {
    id: 4,
    title: "Paint Correction",
    href: "#",
    description:
      "Our paint correction service is meant for major paint imperfections and requires a full grade procedure ranging from 8-20+ hours of fine correcting. All services are quoted on a per client basis and can be booked via call. All correction services come with a mandatory consultation that includes a paint thickness gauge test to ensure we provide the best correction to your vehicle. Vehicle must be on-site for this service.",
    img: "./photos/paintcorrection.jpeg",
  },
  {
    id: 5,
    title: "Polish and Ceramic Coating Level 1",
    href: "#",
    description:
      "We offer ceramic coating services that provide 3+ years of protection to your vehicles painted surfaces. This service requires polishing, or 1 step paint correction, in addition to the Plus Package. Note: 8-12 hours go into this service, so at least 1 full day is required. Vehicle must be on-site for this service.",
    img: "./photos/ceramiccoating.jpg",
    vehicle: {
      car: "Car - $700",
      midsize: "Mid-Size- $850",
      truck: "Truck / SUV - $1000",
    },
  },
  {
    id: 6,
    title: "Polish and Ceramic Coating Level 2",
    href: "#",
    description:
      "1 step paint correction (to achieve even greater gloss and reduction in scratches, swirls, and oxidation) + ceramic coating",
    img: "./photos/coating2.png",
    vehicle: {
      car: "Car - $800",
      midsize: "Mid-Size- $950",
      truck: "Truck / SUV - $1100",
    },
  },
];



export default function Prices() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Detailing  Services
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
          Mobile detailing available for Basic & Plus Packages, and Service Upgrades ONLY
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {packages.map((p) => (
            <article
              key={p.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <img
                  alt=""
                  src={p.img}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">


                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={p.href}>
                      <span className="absolute inset-0" />
                      {p.title}
                    </a>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">
                    {p.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                        <span className="absolute inset-0" />
                        {p.vehicle?.car}
                    </p>
                    <p className="font-semibold text-gray-900">
                        <span className="absolute inset-0" />
                        {p.vehicle?.midsize}
                    </p>
                    <p className="font-semibold text-gray-900">
                        <span className="absolute inset-0" />
                        {p.vehicle?.truck}
                    </p>
                 
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}


