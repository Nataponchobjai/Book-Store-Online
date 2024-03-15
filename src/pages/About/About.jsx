import React from 'react'
import "./About.css"
import aboutImg from "../../images/about-img2.avif"

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>

        </div>
        <div className='about-content grid'>
          <div className='about-img'>
            <img src= {aboutImg}  alt="" />

          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookStoreOnline </h2>
            
            <br />
            <p className='fs-17'> I get close to finishing my studies, I choose a final project  is create BookStoreOnline. I love reading every day and  all kinds of books and I'm studying to be a fullstack developer. So, I decided to create an online bookstore for my project.

            This project is important for me because it's not just for school; I also want to use it to help me in my future career. I chose to make an online bookstore because it combines my love for books with my interest in building websites. This way, I can share my love of reading with others and show what I can do as a developer.

            By doing this project, I get to practice my skills in making websites that are easy and fun for people to use. I hope this online bookstore can be a place where people find and fall in love with new books, just like I have. It's a way for me to connect my passion for reading with my career goals. </p>
          </div>

        </div>

      </div>
    </section>
    
  )
}

export default About
