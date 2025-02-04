
import { MdAddCall } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
// import  { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import Link from "next/link";
import Form from "./form"

const Contact = () => {
 
  return (
      <div className='text-white'>
      
      <div className='container w-[800px ]'>
        <h3 className="mt-[70px] text-center text-[25px] mb-[50px]">Contact me</h3>
        <div className='parent flex  justify-evenly flex-col sm:flex-row'>
          <div className='calls m-auto'>

            <div className="chaidCalls ">
              <div className="icon py-[7px] ">
              <MdAddCall className="m-auto text-[25px]" />
              </div>
              <p className=" px-[10px] py-[5px]">Call Number: (020) 1114297618</p>
              <Link className=" bg-[#ffffff] px-[10px] py-[3px] rounded text-[#2b6c82]"  href={"tel:+01114297618"}> Call Me </Link>
            </div>

            <div className="chaidCalls">
            <div className="icon py-[7px]">
            <FaInstagram className="m-auto text-[25px]"/>
                </div>
              
              <p className="line-clamp-1 px-[10px] py-[5px]">https://www.instagram.com/mahmoudhussein547?igsh=bmtxdHgzcDJjcHJz</p>
              <Link className=" bg-[#ffffff] px-[10px] py-[3px] rounded text-[#2b6c82]"
                href={"https://www.instagram.com/mahmoudhussein547?igsh=bmtxdHgzcDJjcHJz"}>Send Me</Link>
            </div>
            <div className="chaidCalls">
            <div className="icon py-[7px]">
                <FaWhatsapp className="m-auto text-[25px]"/>
                </div>
              <p className="px-[10px] py-[5px]"> WhatsApp number: +20 1114297618</p>
              <Link className="bg-[#ffffff] px-[10px] rounded text-[#2b6c82]"
                href={"https://wa.me/+201114297618"}> Send Me</Link>
            </div>
          </div>
          <div className='message max-w-full m-auto '>
            <Form/>
            {/* <form>

              <input className=" block bg-inherit border border-gray-50 px-[20px] my-[20px] w-[300px]  md:w-[450px] "
                placeholder="your full Name" type="text" required />
              <input className=" block bg-inherit border border-gray-50 px-[20px] my-[20px] rounded w-[300px] md:w-[450px] "
                placeholder="yore Email" type="email" required />
              <textarea className="rounded w-[300px] md:w-[450px]  min-h-[200px] block bg-inherit border border-gray-50 px-[20px] my-[20px]"
                placeholder="your message" required></textarea>
              <button className="bg-main block px-[10px] py-[3px]  rounded-full my-[30px] mx-auto" type="submit">Send Message</button>
            </form> */}
          </div>
          
        </div>
       

      </div>
      
    </div>
  )
}

export default Contact;
