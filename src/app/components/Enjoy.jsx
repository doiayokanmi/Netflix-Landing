import Image from 'next/image'
import React from 'react'


const Enjoy = (props) => {

  return (
    <>
        <section className={`enjoy ${props.flexDirection}`}>
            <div>
            <h1 className='mb-4'>{props.title}</h1>
            <p>{props.para}</p>
            </div>

            <div>
            <Image className='img-fluid' src={props.image} alt='' width={'80%'} />
            </div>
        </section>
    </>
  )
}

export default Enjoy