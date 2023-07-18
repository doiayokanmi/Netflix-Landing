import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/Image/Netflix Logo.jpg'
import Link from 'next/link'

const Header = () => {
  return (
    <>
    <nav>
    <Image src={Logo} alt='' width={180} height={80} />

    <Link className='link' href='/signin' >Sign In</Link>
    </nav>
    </>
  )
}

export default Header