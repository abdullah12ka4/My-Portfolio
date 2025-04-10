"use client";
import { useEffect, useState, useRef } from "react";
import Typed from "typed.js";
import Link  from 'next/link';
import { FaGithub, FaYoutube,  FaXTwitter, FaInstagram, FaLinkedin, } from "react-icons/fa6";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Home() {
  const debounce = (func, delay) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
};
const [isVisible, setIsVisible] = useState(false);
const [lastScroll, setLastScroll] = useState(0);
  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll) {
        setIsVisible(true); // Show when scrolling down
      } else {
        setIsVisible(false); // Hide when scrolling up
      }
      setLastScroll(currentScroll);
    }, 200); // Adjust debounce delay as needed

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);
  
  // for Typed.js
  const el = useRef(null);

  useEffect(() => {
    if (el.current) { // Ensure the ref is attached to an element
      const type = new Typed(el.current, {
        strings: ["Frontend Web developer", "MERN stack Development"],
        typeSpeed: 50,
        onComplete: () => {
          setTimeout(() => {
            type.reset();
            type.start();
          }, 500);
        },
      });
  
      return () => {
        type.destroy();
      };
    }
  }, []);
  
  
 const [isSelectedIndex, setisSelectedIndex] = useState(2)
  const Contact = ()=>{
    const [alert, setalert] = useState("")
    const [userContact, setuserContact] = useState({
      name:"",
      email:"",
      message:""
    })
    const handleContactChange = (e)=>{
    setuserContact({
      ...userContact, [e.target.id]:e.target.value
    })
  }
  const handleContact = async(e)=>{
    e.preventDefault();
    try {
      const response = await fetch("/api/contact",{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(userContact)
    }) 
    const data = await response.json()
    setalert(data.message)    
    if(data.message === 'success'){
      setuserContact({
        name:"",
        email:"",
        message:""
      })
      setTimeout(() => {
        setalert('')        
      }, 3000);     
    }
    } catch (error) {   
         setalert(error)
    }
      
  }
    return(
      <div className={`border-b-2 border-gray-600`}>
        <div>
          <h1 className="text-5xl font-semibold my-3 pt-10 text-center text-orange-500">
            Contact Us
          </h1>
          <div className="flex flex-col md:flex-row my-10 w-[90vw] mx-auto">          
           
          <div className="h-[60vw] md:w-[50vw] md:h-auto" >           
            <DotLottieReact
      src="https://lottie.host/f785e954-8a67-40bc-87a9-8fd648c613e9/4wp9KmSxLm.lottie"      
      loop
      autoplay
    />     
          </div>
         
 <form onSubmit={handleContact} className="flex flex-col gap-2 mx-auto w-full md:w-[50%] bg-[gray] text-white p-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-black font-semibold">Name</label>
              <input id="name" value={userContact.name} onChange={handleContactChange} type="text" placeholder="Name/Organization" className="outline-none border-b-2 py-1" />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="email" className="text-black font-semibold">Email</label>
              <input id="email" value={userContact.email} onChange={handleContactChange} type="email" placeholder="Your Email" className="outline-none border-b-2 py-1"/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-black font-semibold">Message</label>
              <textarea value={userContact.message} onChange={handleContactChange} id="message" className="outline-none rounded-md text-sm py-1 px-3 h-40 bg-white text-black" ></textarea>
            </div>
            {alert && <button className="text-red-500 border-red-500 border-1 rounded-md ">{alert}</button>}
            <button className="hover:cursor-pointer self-end rounded-md text-xl font-semibold my-3 px-3 py-1 bg-orange-600 hover:bg-orange-700">Submit</button>          
          </form>            
          </div>
                   
        </div>
      </div>
    )
  }

  const Services = () => {
    const data = [
      {
        title: "Frontend Development",
        description:
          "Providing frontend web development using React and NextJs with tailwindcss and lots of built-in libraries",
        img: "https://cdn-icons-png.flaticon.com/512/9414/9414296.png",
        },
      {
        title: "Mern Stack Development",
        description:
          "Providing Mern stack web development using React and NextJs",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbn0htLAxjs_uWGTyEwszKlGWfgwad0VzHCA&s",
        
      },  
    ];
    return (
      <div>
        <div>
          <h1 className="text-5xl font-semibold my-5 pt-10 text-center text-orange-500">
            Services
          </h1>
          <p className="text-center text-gray-400">
            I am providing a services listed down below
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[90vw] mx-auto pt-10 mb-20 place-items-center">
            {data.map((post, index) => (
              <div
                key={index}
                className={`${isVisible ? 'expand':''} card w-full pb-3 max-w-[350px] rounded-md bg-[#272525] hover:cursor-pointer hover:scale-105 transition-transform duration-300`}
              >                
                  <img
                    src={post.img}
                    alt={post.title}
                    className="h-56 w-full object-fill rounded-t-md"
                  />
                  <h1 className="text-xl overflow-hidden font-semibold my-2 h-12 px-2">
                    {post.title}
                  </h1>
                  <p className="h-18 overflow-hidden px-2 pb-2 text-gray-400">
                    {post.description}
                  </p>                
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const About = () => {
    const education = [
      {
        id:1,
        title:"Intermediate",
        year:"2019-2021",
        grade:"B Grade",
        from: "BISE Abbottabad"
      },
      {
        id:2,
        title:"Matric",
        year:"2013-2019",
        grade:"B Grade",
        from: "BISE Abbottabad"  
      },
      {
        id:3,
        title:"Bachelor",
        year:"2021-continue",
        grade:"B Grade",
        from:"Abbottabad university of science and technology"
      }
    
    ]
    const skills = [
      {
        id:1,
        title:"React",
        text:"Frontend React developer"
      },
      {
        id:2,
        title:"NextJS",
        text:"Frontend NextJS developer" 
      }    
    ]   
    return (
      < div className="border-b-2 border-gray-600 ">
        <div >
          <h1 className={`text-5xl font-semibold my-10 pt-10 text-center text-orange-500`}>
            About Me
          </h1>
          <div className="flex flex-col-reverse lg:flex-row gap-3 w-[90vw] items-center text-lg text-gray-400 mx-auto">
              <p className="text-lg text-gray-400 text-center w-full lg:flex-1">
              Abdullah, Web developer from Pakistan, I am a frontend and mern
              stack web developer using ReactJs and NextJs. I will provide a scalable and responsive website for your own and organization.
            </p>  
          
            <div className="w-full lg:flex-1">
            <DotLottieReact
      src="https://lottie.host/e1abf3a1-00a9-44b9-a833-2535f38e467b/UrISIXCalK.lottie"
      
      loop
      autoplay
    />              
            </div>                    
          </div>
        </div>
        <div className="px-5">
          <h1 className={`${isVisible ? 'slide':''} text-5xl text-center font-semibold my-5 uppercase`}>
            Education
          </h1>
          <div className="flex flex-col gap-3 text-lg text-gray-400 mx-auto pt- mb-20 max-w-[90vw]">
             <p className="text-lg text-gray-400 text-center my-5">
             My educational background has provided me with a strong foundation in both theoretical and practical aspects of software development. I’ve studied a range of subjects that have helped me acquire the knowledge and problem-solving skills necessary to excel in the tech industry.
             </p>
           
               <div className="flex flex-row w-full sm:flex-col justify-center min-h-[250px] sm:min-h-[200px] bg-gray-700  rounded-md relative">
              {education.map((subject)=>{
                const selectedData =isSelectedIndex == subject.id
                return(
                  <div key={subject.id} className="flex justify-between items-start">
                    <div className="border-t-10 sm:border-t-0 sm:border-l-10 sm:w-[40%]">
                    <h1 id={subject.id} className={`hover:cursor-pointer pt-6 sm:py-10 ${selectedData ? 'sm:py-10 border-t-10 sm:border-t-0 sm:border-l-10 mt-[-10px] sm:mt-0 sm:ml-[-10px] border-black': ''}  px-3 `} onClick={()=>{setisSelectedIndex(subject.id)}}>{subject.title}</h1>
                    </div>
                    <div className="absolute bottom-5 left-4 max-w-[90%]  sm:top-[40%] sm:left-1/3 text-center text-2xl font-semibold sm:text-start">
                    {selectedData && <p>{subject.title} From {subject.from} in {subject.year} at {subject.grade} </p> }                      
                    </div>
                </div>)
              }
              )}
              </div> 
          </div>
        </div>  
        <div className="px-5">
          <h1 className={`${isVisible ? 'slide':''} text-5xl text-center font-semibold my-5 uppercase`}>
            Skills
          </h1>
          <div className="flex flex-col gap-3 text-lg text-gray-400 mx-auto pt-10 mb-20 max-w-[80vw]">
            <div className="flex flex-col lg:flex-row justify-center items-center">
                <div className="w-full lg:flex-1">
          <DotLottieReact
      src="https://lottie.host/1265849b-7871-49f1-9c81-bfe5542e23d8/MVIJ8g0tv2.lottie"
      loop
      autoplay
    />
          </div>
             <p className="w-full lg:flex-1 text-lg text-gray-400 text-center my-5">
             I possess a versatile skill set that spans a wide range of technical and creative abilities. From mastering complex software tools to excelling in collaborative environments, I can quickly adapt to new challenges and tasks. My problem-solving capabilities allow me to find innovative solutions, while my strong communication skills enable me to convey ideas clearly and effectively. Whether working independently or as part of Link team, I thrive in dynamic settings and consistently deliver high-quality results. My passion for growth drives me to continuously refine my skills, ensuring that I stay at the forefront of evolving trends and technologies.
            </p>
            </div>
        
            <div className="flex flex-row w-full sm:flex-col justify-center min-h-[250px] sm:min-h-[200px] bg-gray-700  rounded-md relative">
              {skills.map((subject)=>{
                const selectedData =isSelectedIndex == subject.id
                return(
                  <div key={subject.id} className="flex justify-between items-start">
                    <div className="border-t-10 sm:border-t-0 sm:border-l-10 sm:w-[40%]">
                    <h1 id={subject.id} className={`hover:cursor-pointer pt-6 sm:py-10 ${selectedData ? 'sm:py-10 border-t-10 sm:border-t-0 sm:border-l-10 mt-[-10px] sm:mt-0 sm:ml-[-10px] border-black': ''}  px-3 `} onClick={()=>{setisSelectedIndex(subject.id)}}>{subject.title}</h1>
                    </div>
                    <div className="absolute bottom-5 left-4 max-w-[90%]  sm:top-[40%] sm:left-1/3 text-center text-2xl font-semibold sm:text-start">
                    {selectedData && <p>{subject.text} </p> }                      
                    </div>
                </div>)
              }
              )}
              </div>           
          </div>
        </div>  

      </div>
    );
  };

  return (
    <main className="overflow-hidden w-[100%]">
    <div className="lg:h-[92vh] bg-black border-b-2 flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="left flex items-center justify-center flex-1 p-4">
        <div className="flex flex-col items-center md:items-start">
          <div className="logo text-2xl flex items-center gap-3 mb-5">
            Hello I`m{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 px-3 py-1 rounded-2xl uppercase text-3xl font-bold">
              Abdullah
            </span>
          </div>
          <div className="mb-10 text-5xl font-semibold self-center text-center md:text-left">
            Welcome to my portfolio
          </div>
          <p className="text-lg text-center sm:text-left w-[100%] md:w-[350px] min-h-[80px]">
            <span>Here I provide a lot of services like that </span>
            <span className="underline text-xl" ref={el}></span>
          </p>
          <button className={`bg-orange-600 ${isVisible ? 'button-animate': ''} font-bold text-xl my-5  px-4 py-2 rounded-md hover:bg-orange-500`}><Link href="#contact">Hire Me</Link></button>
        <div className="flex gap-5 py-4 md:w-[80%] items-center flex-wrap text-2xl">
        <Link target="_blank" href="https://www.youtube.com/@itsabdullahtech"><FaYoutube/></Link>
        <Link target="_blank" href="https://www.instagram.com/_____abdullah_here/"><FaInstagram/></Link>
        <Link target="_blank" href="https://github.com/abdullah12ka4"><FaGithub/></Link>
        <Link target="_blank" href="https://www.linkedin.com/in/abdullah-malik-769770309/"><FaLinkedin/></Link>
      </div> 
        </div>
      </div>
  
      {/* Right Section */}
      <div className="right flex-1 relative">
        {/* Diagonal line for decoration */}
        <div className="rotate-25 h-[99.5vh] w-[2px] absolute top-[-30px] md:flex hidden"></div>
        <div className="flex items-end justify-center h-[100%]">
          <img
            src="profilegood.jpg"
            alt="Template"
            className="h-[90%] object-contain "
          />
        </div>
      </div>
    </div>
  
    <div id="about" ><About /></div> 
    <div id="services"><Services /></div>
    <div id="contact"><Contact /></div> 
    
  </main>
  
  );
}
