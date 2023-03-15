import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-400'>About</p>
            </div>
            <p className='text-xl mt-20'>
                I have experience in Python, SQL, well-known libraries such as Pandas, Numpy, web scraping, missing data, data analysis, NLP, NLG, machine learning, feature selection and choosing an ML/DL model.
            </p>
            <br />

            <p className='text-xl'>
                I have also experience in web development for over 4 years with different frameworks such as Django, Flask and now keen to build websites with React and Tailwind since it looks much better with these new frameworks!
            </p>

        </div>
    </div>
  )
}

export default About