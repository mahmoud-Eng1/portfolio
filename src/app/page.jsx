"use client"
import Image from "next/image";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import myImage from "../../public/me.png" 
import {useTypewriter, Cursor, Typewriter} from "react-simple-typewriter"

function Home() {

  return (
    <section className="pt-[100px]">
      <div className="container parentHome ">
        <div className="infoName w-[320px] max-w-full px-2">
          <p className="bg-main text-center px-4 rounded-sm"> Wellcom All In My Portfolio</p>
          <h2 className="text-[30px]">
            Hi! I'm Mahmoud Hussein Abdelmawjoud
            <span className="text-[30px]"> I'm <Typewriter
              words={["FrontEnd developer "]}
              loop= {true}
            /> </span>
            <Cursor/>
          </h2>
          <div className="icon p-4">
            <ul className='flex gap-[30px] '>
            <li className='liHomeIcon '><Link className='text-[20px]' href={"https://github.com/mahmoud-Eng1?tab=repositories"}> <FaGithubSquare/></Link> </li> 
            <li className='liHomeIcon'><Link className='text-[20px]' href={"https://www.linkedin.com/in/mahmoud-hussein-78b2241b4/"}> <FaLinkedin/> </Link>  </li>
            <li className='liHomeIcon'><Link className='text-[20px]' href={""}> <FaFacebook/> </Link>  </li>
            
          </ul>
          </div>
        </div>
        <div className="myImage w-[200px] m-auto sm:w-[300px] pt-[50px] max-w-full ">
          <Image className="w-[100%] animate-[moveTop_1s_ease-in-out_infinite]" src={myImage} alt="my image"/>
        </div>
      </div>
    </section>
  );
 }
export default Home;
