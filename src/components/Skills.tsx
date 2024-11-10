import React from 'react';

const Skills = () => {
  return (
    <div id="skills"className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in-up">
                <h2 className='text-4xl md:text-4xl' data-aos="zoom-in-up">Technologies I Work With</h2>
                <p className='text-gray-500 pt-2'>I have a solid foundation in web development, specialiazing in HTML CSS and Javascript. My experiance extands to using framework like React and Next.js to create dynamic and user friendly applications i am also proficient in telwind CSS for efficient styling and design with a passion for learning .I stay update on the latest technologies to enhance my skills and contribute effictively to project.
                 </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-blue-500 text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-up">Typescript</h2>
                        <h2 data-aos="zoom-in-up">React.js</h2>
                        <h2 data-aos="zoom-in-up">Next.js</h2>
                    </div>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-up">Tailwind</h2>
                        <h2 data-aos="zoom-in-up">CSS</h2>
                        <h2 data-aos="zoom-in-up">Node.js</h2>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  );
}

export default Skills;
