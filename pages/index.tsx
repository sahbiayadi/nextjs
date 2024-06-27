import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function Homepage() {
  return (
    <div className="text-9xl text-red-900">
      <nav className='navbar'>
        <button className='btn1'>My-Potfolio</button>
        <Link href="about">About</Link>
        <Link href="contact">Contact</Link>
      </nav>
      <div className="container">
      <div className="des">
      <h2>Mustapha-Amara</h2>
      <h3>Developer Full-Stack JS</h3>
      </div>
        <Image src="/mustapha1.jpg" alt="" width={500} height={500} />
        <div className="des">
      <h2>Mustapha-Amara</h2>
      <h3>Developer React JS</h3>
      </div>
        <Image src="/reactjs.png" alt="" width={500} height={500} />
      </div>
      <br />
    </div>
  )
}

export default Homepage
