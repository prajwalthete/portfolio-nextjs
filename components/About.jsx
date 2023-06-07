import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
           As a full-stack developer, I specialize in building responsive applications that seamlessly connect front-end UIs with APIs and other backend technologies. I am passionate about learning new technologies and believe that there is always more than one way to accomplish a task.
           My skillset spans across both front-end and backend technologies, allowing me to build robust and scalable applications from scratch. I am proficient in front-end development using HTML, CSS, and JavaScript, as well as backend development using Node.js, Java, Spring Boot, and have extensive experience working with React and Next.js to build dynamic and responsive user interfaces.
          On the backend, I have experience working with various technologies, including Node.js, Express, and MongoDB. I can design and develop APIs, create and manage databases, and deploy applications to cloud platforms.
          </p>
          <p className='py-2 text-gray-600'>
          I started my career in web development in 2022, managing multiple e-commerce websites. Since then, I have worked on various projects, ranging from small business websites to large-scale web applications.
          My passion for learning new technologies drives me to stay up-to-date with the latest trends and best practices in the industry.
          Overall, as a full-stack developer, I bring a unique combination of skills and expertise to every project. Whether it's building a new application from scratch or maintaining an existing one, I am committed to delivering high-quality work that meets the needs of my clients and end-users.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
