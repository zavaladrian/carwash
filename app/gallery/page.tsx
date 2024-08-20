'use client'
import React from "react"
import ModernCarousel from "../components/carousel"
import Footer from "../components/footer"

const GalleryPage = () => {


  return (
    <div className="">
    <div className='mx-20 p-2'>
       <p className='text-center font-pacifico text-7xl p-4 invisible sm:visible'>Revive Your Ride</p>
       <p className='text-center text-4xl p-3 invisible sm:visible'>Here are some before & after photos from some of our customers</p> 
      <ModernCarousel /> 
    </div> 
    <p className='text-center text-xl font-bold visible sm:invisible m-5'>Here are some before & after photos from some of our customers</p>  
    <Footer /> 
    </div>
   
  )
}

export default GalleryPage