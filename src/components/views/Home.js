import React from 'react';
import heroImage from '../../images/heroImage.svg'

//<img src={heroImage} alt='heroImage with a female developer' />
const Home = () => {
  return (
    <>
      <section className='content-section'>
        Alejandra ferreira with hero Image
        <div className='hero-image' style={{backgroundImage: `url(${heroImage})`}} >
        </div>
      </section>
      <section className='content-section'>
        Content
      </section>
      <section className='content-section'>
        Footer
      </section>
    </>
  )
}

export default Home