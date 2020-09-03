import React from 'react';
import heroImage from '../../images/heroImage.svg'
import ContactMeForm from '../../components/contactForm/ContactMeForm'

const Home = () => {
  return (
    <>
      <section className='content-section'>
        <div className='hero-image' style={{backgroundImage: `url(${heroImage})`}} >
        <div className='title-container'><span>Ale Ferreira</span></div>
        <div className='hero-text-container'>
          <h3>Full Stack Web Developer</h3>
          <h5>Agile enthusiast<br />Driven autodidact</h5>
          <h5>Co-founder @MagentaCodes</h5>
        </div>
        </div>
      </section>
      <section className='content-section'>
        <ContactMeForm />
      </section>
    </>
  )
}

export default Home