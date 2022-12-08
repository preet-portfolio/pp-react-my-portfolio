import React from 'react'

import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name="home">
            <div className='h-screen w-full bg-white mx-auto flex flex-col items-center justify-center  px-4 md:flex-row'>
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-xl shadow-blue-300 overflow-hidden md:max-w-2xl">
                    <div className="md:flex">
                        <div className="md:shrink-0">
                            <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://images.pexels.com/photos/744480/pexels-photo-744480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Modern building architecture" />
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">My Name Is Preet Panchal</div>
                            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Coder || Gamer || Learner</a>

                            <p className="mt-2 text-slate-500">
                                Extremely motivated and focused software developer obsessed with learning new abilities I've worked with Javascript,
                                CSS, React, Redux, SQL, Node.js to create complicated online apps.
                            </p>
                        </div>
                        <div>
                            <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                                Portfolio
                                <span className='group-hover:rotate-90 duration-300'>
                                    <MdKeyboardArrowRight size={25} className='ml-1' />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home