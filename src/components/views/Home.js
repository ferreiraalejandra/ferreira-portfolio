import React from 'react';
import heroImage from '../../images/heroImage.svg'

const Home = () => {
  return (
    <>
      <section className='content-section'>
        <div className='hero-image' style={{backgroundImage: `url(${heroImage})`}} >
        <div className='title-container'><span>Ale Ferreira</span></div>
        <div className='hero-text-container'><span>Full Stack Web Developer<br />Agile enthusiast<br />Driven autodidact<br />Co-founder @MagentaCodes</span></div>
        </div>
      </section>
    </>
  )
}

export default Home