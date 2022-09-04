import React from 'react'
import emoji from '../assets/portfolio/emoji.png'
import huluclone from '../assets/portfolio/huluclone.png'
import airbnb from "../assets/portfolio/airbnbclone.png"
import reactWeather from "../assets/portfolio/reactWeather.jpg"
import fashionEcommerce from "../assets/portfolio/fashionEcommerce.png"

const Portfolio = () => {

    const portfolio = [
        {
           id:1,
           src: airbnb,
        //    deployed
           replit: 'https://airbnb-clone-l96zigkz8-preet-portfolio.vercel.app',
           github: 'https://github.com/preet-portfolio/airbnb-clone-pp'

        },
        {
            id:1,
           src: huluclone,
        //    deployed
           replit: 'https://hulu-pp-clone.vercel.app',
           github: 'https://github.com/preet-portfolio/hulu-pp-clone'
        },
        {
            id:3,
           src: emoji,
           replit: 'https://replit.com/@preet-portfolio/Emojies',
           github: 'https://github.com/preet-portfolio/emoji'
        },
        {
            id:4,
            src: fashionEcommerce,
            replit: 'https://replit.com/@preet-portfolio/urban-garbanzo#',
           github: 'https://github.com/preet-portfolio/urban-garbanzo'
        },
        {
            id:5,
            // src: installNode
        },
        {
            id:6,
            src: reactWeather
        },
        
    ]


  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-fill text-white md:h-screen'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some example of my work</p>
            </div>

            

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0  '>

            {portfolio.map(({id,src, replit, github}) => (
                 <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                 <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
                 <div className='flex items-center justify-center'>
                     <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                        <a href={replit} target="_blank" rel="noreferrer"> 
                        Demo
                        </a>
                        </button>
                     <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                        <a href={github} target="_blank" rel="noreferrer">
                        Code
                        </a>
                        </button>
 
                 </div>
                 </div>
                    

                    ))
                }
               
            </div>
        </div>



    </div>
  )
}

export default Portfolio