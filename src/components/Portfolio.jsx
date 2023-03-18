import React from 'react'
import comedianClassifier from '../assets/ComedianClassifier.png'
import ecommerce from '../assets/Ecommerce.png'
import estimatedBP from '../assets/EstimateBloodPressure.png'
import flutterApp from '../assets/iOSAstrologicalSignApp.png'
import skinCancer from '../assets/SkinCancer.png'
import recipeGenerator from '../assets/RecipeGenerator.png'

const Portfolio = () => {
  
    const portfolios = [
        {
            id:1,
            src:ecommerce,
            title: "E-commerce website",
            tech: "Python, Django, AWS Elastic Beanstalk, SQLite",
            href: "http://djangoawsec-env.eba-ekd3hrdt.us-east-2.elasticbeanstalk.com/",
            git_href: "https://github.com/enesbasbug/ecommerce_django",
            c: true
        },
        {
            id:2,
            src:estimatedBP,
            title: "A website estimates the one's blood pressure using DL Model by contactless webcam",
            tech: "Python, Flask, OpenCV, Keras, Tensorflow, HTML, CSS, JavaScript ",
            href: "https://github.com/enesbasbug/Blood_Pressure_Estimation_with_Webcam_using_Deep_Learning",
            git_href: "https://github.com/enesbasbug/Blood_Pressure_Estimation_with_Webcam_using_Deep_Learning",
            c: false

            
        },
        {
            id:3,
            src:recipeGenerator,
            title: "Recipe generation and image generation based on the generated recipe using LSTM and Big Sleep",
            tech: "Python, NLP, NLTK, NLG",
            href: "https://enesbasbug-food-recipe-generator-app-5bw3u6.streamlit.app/",
            git_href: "https://github.com/enesbasbug/Food_Recipe_Generator",
            c: true
        },
        {
            id:4,
            src:skinCancer,
            title: "Skin Cancer Classifier",
            tech: "Python, Tkinter, Keras",
            href: "https://nbviewer.org/github/enesbasbug/Skin_Cancer_Classifier/blob/master/Classifier.ipynb",
            git_href: "https://github.com/enesbasbug/Skin_Cancer_Classifier",
            c: false
        },
        {
            id:5,
            src:comedianClassifier,
            title: "Comedian Classifier",
            tech: "Python, OpenCV, Pandas, Numpy",
            href: "https://github.com/enesbasbug/Image_Classification_Project",
            git_href: "https://github.com/enesbasbug/Image_Classification_Project",
            c: false
        },
        {
            id:6,
            src:flutterApp,
            title: "Astrology, Horoscopes and Birth Chart iOS Mobile App",
            tech: "Flutter, Dart",
            href: "https://github.com/enesbasbug/Flutter_iOS_App_Astrological_Sign",
            git_href: "https://github.com/enesbasbug/Flutter_iOS_App_Astrological_Sign",
            c: false
        },
    ]
  
    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my works right here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    { portfolios.map(({id, src, title, tech, href, git_href, c}) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                            <p className='py-3 px-3'>{title}</p>
                            <p className='py-3 px-3 border-r-4 font-semibold'>{tech}</p>
                            <div className='flex items-center justify-center'>

                                {/* <button className='w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105 font-bold'>
                                    <a href={href} target="_blank" rel="noreferrer"> Demo </a>
                                </button>     */}
                                <button className='w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105 font-bold'>
                                    <a href={git_href} target="_blank" rel="noreferrer"> Code </a>
                                </button>
                            </div>
                        </div>
                    ))}  
                </div>      
            </div>
        </div>
  )
}

export default Portfolio
