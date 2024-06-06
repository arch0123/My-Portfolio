// import React from 'react'
// import './Hero.css'
// import My_Pic from '../../assets/My_Pic.png'

// const Hero = () => {
//   return (
//     <div className='hero'>
//         <img src={My_Pic} alt =''/>
//       <h1><span>I'm Archit Shukla,</span>
//       Web Developer based in India</h1>
//       <p>I'm a passionate web developer with some key skills of HTML,CSS,JavaScript & Java and I also have a knowledge of React Js </p>
//       <div className = 'hero-action'>
//       <div className = 'hero-connect'>Connect With Me </div>
//       <div className = 'hero-resume'>My Resume</div> 
    
//       </div>
//     </div>
//   )
// } 



// export default Hero 



import React from 'react'
import './Hero.css'
import My_Pic from '../../assets/My_Pic.png'
import Resume from '../../assets/resume.pdf' // Assuming your resume is a PDF file located in the assets folder

const Hero = () => {
  const openResume = () => {
    window.open(Resume, '_blank');
  }

  return (
    <div className='hero'>
      <img src={My_Pic} alt='Profile' />
      <h1>
        <span>I'm Archit Shukla,</span>
        Web Developer based in India
      </h1>
      <p>
        I'm a passionate web developer with some key skills of HTML, CSS, JavaScript & Java, and I also have knowledge of React.js
      </p>
      <div className='hero-action'>
        <div className='hero-connect'>Connect With Me</div>
        <button className='hero-resume' onClick={openResume}>My Resume</button>
      </div>
    </div>
  )
}

export default Hero






 