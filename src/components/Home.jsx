 import React from 'react';
 import myImage from '../assets/image.png';
 import {HiOutlineArrowRight} from 'react-icons/hi';
 import {Link} from 'react-scroll'

 const Home = () => {
   return (
     <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800' >
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-6xl font-bold text-white'>I am a Full Stack Developer</h2>
                <p className='text-gray-500 max-w-md py-1'>
                    I am a computer engineer and a recent graduate with masters in Artificial Intelligence from Queen Mary University of London. I spent the past couple of years immersing myself in data science and web development. 
                </p>
                

                <div>
                    <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-amber-500 to-amber-700 cursor-pointer'>
                         Portfolio 
                          <span className='ml-2 group-hover:rotate-90 duration-300'><HiOutlineArrowRight size={20} /></span>
                    </Link>  
                </div>
            </div>
            <div><img src={myImage} alt="profile picture" className='rounded-2xl mx-auto w-2/3 md:w-100'/></div>
        </div>
     </div>
   )
 }
 
 export default Home