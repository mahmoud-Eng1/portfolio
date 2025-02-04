"use client"
import { useState } from "react"; 
import Image from "next/image";
import data from "../../components/data"
import Link from 'next/link';

// https://app-491f1.web.app/ amazon-react
//https://mahmoud-eng1.github.io/project-2/  html-css
// https://mahmoud-eng1.github.io/system-crud/ html-css-js
// https://tuition-ruddy.vercel.app/ tuition-react
// https://menu-4469a.web.app/ menu-react
// https://mahmoud-eng1.github.io/bootstrap/ bootstrap
// https://shoping-laptops.web.app/ react 

const Projects = () => {
  const [projects, setProjects] = useState(data);
  
  return (
    <div>
      <div className='container text-white'>
        <h2 className="text-center text-[30px] pt-[100px] pb-[50px] ">My project</h2>
        <div className="paren flex flex-wrap sm:gap-[30px] w-[850px] max-w-full m-auto">
          {
            projects.map((ele) => {
              return (
                <div className='info border rounded m-auto mb-[20px]' key={ele.id}>
                  <div className="imag w-[250px] h-[150px] max-w-full">
                     <Image className="w-full h-full" src={ele.image} alt={ele.alt} width={ele.width} height={ele.height} />
          </div>
                  <h3  className="title p-[10px] text-[20px]">project : {ele.title}</h3>
                  <p className="p-[10px] w-[200px]">{ele.discrpt} </p>
                  <div className="btn">
                    {
                      ele.title !== "portfolo" && <Link  href={ele.liveDemo}><button className="border bg-main px-[10px] py-[5px] rounded">live Demo</button></Link>
                  
                    }
                    <Link href={ele.githup}> <button className="gitBtn border m-4 border-main px-[10px] py-[5px] rounded">Githup</button></Link>
                    {/* <Link ref={refdemo} href={ele.liveDemo}><button className="border bg-main px-[10px] py-[5px] rounded">live Demo</button></Link> */}
           
            
          </div>
          </div>
              )
            })
          }
        
      

          </div>

      </div>
    </div>
  )
}

export default Projects;
