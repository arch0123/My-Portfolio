import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import My_Pic from '../../assets/My_Pic.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
        <h1>About Me</h1>
        <img src={theme_pattern} alt=''/>
        </div>
      <div className='about-section'>

      <div className='about-left'>
        <img src={My_Pic} alt =''/>


      </div>
      <div className='about-right'>
      <div className = 'about-para'>
        <p>I'm  a passionate and dedicated web developer eager to kickstart my career in the tech industry. </p>
       <p> I am currently pursuing in BCA from IGNOU where I developed a solid foundation in web development, coding, and design principles.</p>
        
      </div>
      <div className='about-skills'>
        <div className = 'about-skill'><p>HTML & CSS</p><hr style ={ {width:"50%"}}/></div>
        <div className = 'about-skill'><p>React JS</p><hr style ={ {width:"70%"}}/></div>
        <div className = 'about-skill'><p>JavaScript</p><hr style ={ {width:"60%"}}/></div>
        <div className = 'about-skill'><p>Java</p><hr style ={ {width:"50%"}}/></div>
      

      </div>
      </div>


      </div>
    </div>
  )
}

export default About 
