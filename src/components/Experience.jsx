import React from 'react'
import sql from '../assets/experience/sql.png'
import bootstrap from '../assets/experience/bootstrap.png'
import css from '../assets/experience/css.png'
import django from '../assets/experience/django.png'
import ai from '../assets/experience/ai.png'
import flask from '../assets/experience/flask.jpg'
import flutter from '../assets/experience/flutter.png'
import github from '../assets/experience/github.png'
import html from '../assets/experience/html.png'
import huggingFace from '../assets/experience/huggingFace.png'
import js from '../assets/experience/javascript.png'
import keras from '../assets/experience/keras.png'
import python from '../assets/experience/py.webp'
import pytorch from '../assets/experience/pytorch.webp'
import r from '../assets/experience/R.png'
import react from '../assets/experience/react.png'
import tailwind from '../assets/experience/tailwind.png'
import tf from '../assets/experience/tf.png'
import tkinter from '../assets/experience/tk.webp'
import mongodb from '../assets/experience/mongodb.jpg'



const Experience = () => {

    const techs = [
        {
            id:1,
            src: python,
            title: 'Python',
            style: 'shadow-blue-500'
        },
        {
            id:2,
            src: ai,
            title: 'ML/DL',
            style: 'shadow-gray-100'
        },
        {
            id:3,
            src: sql,
            title: 'SQL',
            style: 'shadow-yellow-100'
        },
        {
            id:4,
            src: django,
            title: 'Django',
            style: 'shadow-green-500'
        },
        {
            id:5,
            src: flask,
            title: 'Flask',
            style: 'shadow-gray-100'
        },
        {
            id:6,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id:7,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id:8,
            src: js,
            title: 'Javascript',
            style: 'shadow-yellow-500'
        },
        {
            id:9,
            src: r,
            title: 'R',
            style: 'shadow-blue-500'
        },
        {
            id:10,
            src: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-purple-500'
        },
        {
            id:11,
            src: tkinter,
            title: 'Tkinter',
            style: 'shadow-blue-500'
        },
        {
            id:12,
            src: mongodb,
            title: 'MongoDB',
            style: 'shadow-green-500'
        },
        {
            id:13,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-100'
        },
        {
            id:14,
            src: keras,
            title: 'Keras',
            style: 'shadow-red-500'
        },
        {
            id:15,
            src: tf,
            title: 'Tensorflow',
            style: 'shadow-orange-500'
        },
        {
            id:16,
            src: pytorch,
            title: 'Pytorch',
            style: 'shadow-red-500'
        },
        {
            id:17,
            src: huggingFace,
            title: 'Hugging Face - NLP',
            style: 'shadow-yellow-500'
        },
        {
            id:18,
            src: flutter,
            title: 'Flutter',
            style: 'shadow-blue-500'
        },
        {
            id:19,
            src: react,
            title: 'React',
            style: 'shadow-blue-500'
        },
        {
            id:20,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-blue-500'
        },
        
    ]

  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-5 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>

                {
                    techs.map(({id, src, title, style}) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className='w-20 mx-auto'/>
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))
                }


                
            </div>
        </div>    
    </div>
  )
}

export default Experience