import React from 'react'
import ContactForm from '../components/contactform'
import Footer from '../components/footer'

const ContactPage = () => {
  return (
    <div>
    <div >
      <div className='bg-white'>
        <ContactForm />
      </div>
    </div>
      <Footer />
    </div>
  )
}

export default ContactPage