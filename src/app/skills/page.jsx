
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaDocker } from "react-icons/fa";

const Skills = () => {
  return (
    <section>
      <div className='container text-white mt-[50px]'>
        <h2 className="text-[25px] pt-[100px] pb-[30px] text-center">My Skills</h2>
        <div className="skils w-[700px] m-auto max-w-full">
          <div className="flex  flex-wrap  max-w-full sm:flex-row">

            <div className=" w-[150px] px-[10px] py-[30px] max-w-full  m-auto" > 
              <span><FaHtml5 className="text-blue-500 text-[50px] " /></span>
              <p className="p-[10px] text-[20px]">Html</p>
            </div>

            <div className=" w-[150px] px-[10px] py-[30px] max-w-full  m-auto">
              <span><FaCss3Alt className="text-blue-500 text-[50px] " /></span>
              <p className="p-[10px] text-[20px]"> Css</p>
            </div>

            <div className=" w-[150px] px-[10px] py-[30px] max-w-full  m-auto">
              <span><FaBootstrap className="text-blue-500 text-[50px]" /></span>
            <p className="p-[10px] text-[20px]">Bootstrap</p>
            </div>

            <div className=" w-[150px] px-[10px] py-[30px] max-w-full  m-auto">
              <span><SiTailwindcss className="text-blue-500 text-[50px]" /></span>
            <p className="p-[10px] text-[20px]">Tailwind Css</p>
            </div>
            <div className="w-[150px] px-[10px] py-[30px] max-w-full  m-auto">
              <span>< IoLogoJavascript className="text-blue-500 text-[50px]" /></span>
            <p className="p-[10px] text-[20px]">javescript</p>
            </div>
              
            <div className="w-[150px] px-[10px] py-[30px] max-w-full  m-auto">
              <span><FaReact className="text-blue-500 text-[50px]" /></span>
            <p className="p-[10px] text-[20px]">React js</p>
            </div>

            <div className=" w-[150px] px-[10px] py-[30px] max-w-full  m-auto">
              <span><RiNextjsFill className="text-blue-500 text-[50px]" /></span>
              <p className="p-[10px] text-[20px]">Next js</p>
            </div>
            <div className=" w-[150px] px-[10px] py-[30px] max-w-full  m-auto">
              <span><DiNodejs className="text-blue-500 text-[50px]" /></span>
              <p className="p-[10px] text-[20px]">Node js</p>
            </div>
            <div className=" w-[150px] px-[10px] py-[30px] max-w-full  m-auto">
              <span><SiExpress className="text-blue-500 text-[50px]" /></span>
              <p className="p-[10px] text-[20px]">express</p>
            </div>
            <div className=" w-[150px] px-[10px] py-[30px] max-w-full  m-auto">
              <span><SiMongodb className="text-green-500 text-[50px]" /></span>
              <p className="p-[10px] text-[20px]">mongodb</p>
            </div>

            <div className=" w-[150px] px-[10px] py-[30px] max-w-full  m-auto">
              <span><FaGitAlt className="text-[50px]" /></span>
              <p className="p-[10px] text-[20px]">Git</p>
            </div>

            <div className=" w-[150px] px-[10px] py-[30px] max-w-full  m-auto">
              <span><FaGithubSquare className="text-white text-[50px]" /></span>
            <p className="p-[10px] text-[20px]">Githup</p>
            </div>

            <div className=" w-[150px] px-[10px] py-[30px] max-w-full  m-auto">
              <span><FaDocker className="text-white text-[50px]" /></span>
            <p className="p-[10px] text-[20px]">Docker</p>
            </div>
              
          </div>
        </div>
    </div>
    </section>
  )
}

export default Skills;
