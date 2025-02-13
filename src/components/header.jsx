import React from 'react'
import Image from 'next/image';
import logo from "../../public/logo.jpg";
import Link from 'next/link';


const Header = () => {
  return (
    <header className='fixed top-0 w-full bg-[#0c1524]'>
      <div className='container  mx-auto px-3 max-w-full sm:px-[50px]  text-white flex justify-between items-center flex-col sm:flex-row'>
        <div className='w-[80px]'>
          <Link href={"/"}> <Image src={logo} className='w-full' alt='logo-image'/></Link>
        
      </div >
        <nav className='flex'>
        
        <ul className='flex gap-2 sm:gap-5 '>
          <li className='liHeader'><Link className='liHeaderLinks'  href={"/"}>Home</Link></li>
          <li className='liHeader'><Link className='liHeaderLinks' href={"/skills"}>Skills</Link></li>
          <li className='liHeader'><Link className='liHeaderLinks' href={"/projects"}>Projects</Link> </li>
          <li className='liHeader'><Link className='liHeaderLinks' href={"contact"}>Contact</Link> </li>
          </ul>

         
        </nav>
        

        </div>
    </header>
  )
}

export default Header;
