import React from 'react'

const About = () => {
  return (
    <div name="about"
    className="w-screen h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
        <div className='max-w-screen-lg p-2 my-2 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About Me
                </p>
            </div>
            <p className='text-xl mt-20'>
            World, welcome! I'm Preet Panchal, an Ottawa-based web developer. 
                I enjoy fusing the worlds of logic with creative design to create 
                appealing, open, and user-friendly websites and apps, from lines of 
                code on a web page to Fashion Communication on a stage. Technology sets 
                the pace; civilization keeps up. I value the movement toward more inclusiveness
                and diversity in the business via representation. I'm eager to take the 
                plunge and further my career with the best organisation.
            </p>
            <br />
            <p className='text-xl'>
            I received my diploma in Interactive Media Design from Algonquin College, 
            and I have also taken a number of courses in web design, programming, coding, 
            and design thinking. My three years of experience made it easier for me to comprehend 
            business tactics. I can now readily adapt to the commercial market and comprehend 
            the needs of consumers.
            </p>
            
        </div>
    </div>
  )
}

export default About