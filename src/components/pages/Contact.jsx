import React from 'react'
import Footer from '../modules/Footer'
import NavigationThree from '../common/NavigationThree'
import ContactSection from '../modules/ContactSection'

function Contact() {
  return (
    <>
      <section className="contactPage">
        <NavigationThree></NavigationThree>
        <div className="content">
          <ContactSection></ContactSection>
        </div>
        <Footer></Footer>
      </section>
    </>
  )
}

export default Contact