'use client'


const upgrades = [
    {
        id:7,
        title: "Interior Steam Clean (deodorize & sanitize)",
        href:'#',  
        img:'./photos/interior.png',
        price:'$100-$200',
    },
    {
        id:8,
        title: "Trim Restoration",
        href:'#',   
        img:'./photos/trim.png',
        price:'$80',
    },
    {
        id:9,
        title: "Headlight Restoration",
        href:'#', 
        img:'./photos/headlight.png',
        price:'$60',
    },
    {
        id:10,
        title: "Engine Bay Detail ",
        href:'#',
        img:'./photos/engine.jpg',
        price:'$60',
    },
]

export default function Upgrades() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Upgrade Services</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Add-on any extra services
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {upgrades.map((u) => (
              <article
                key={u.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img alt="" src={u.img} className="absolute inset-0 -z-10 h-full w-full object-cover" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
  
                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <div className="text-sm leading-6">
                    <p className="font-semibold text-white">
                        <span className="absolute inset-0" />
                        {u.price}
                    </p>
                </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={u.href}>
                    <span className="absolute inset-0" />
                    {u.title}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }