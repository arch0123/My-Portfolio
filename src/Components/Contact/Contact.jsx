import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "4c461c54-9824-4138-97fb-dd15cdab26c3");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message)
        }
      };

    return (
        <div id ='contact' className='contact'>
            <div className='contact-title'>
                <h1>Get In touch</h1>
                <img src={theme_pattern} alt='' />
            </div>

            <div className='contact-section'>
                <div className='contact-left'>
                    <h1>Let's talk </h1>
                    <p>I'm currently available to take new projects,so feel free to send me message about anything that you want me to work on.You can contact me anytime</p>
                    <div className='contact-details'>
                        <div className='contact-detail'>

                            <img src={mail_icon} alt='' /><p>architshukla527@gamil.com</p>
                        </div>
                        <div className='contact-detail'>

                            <img src={call_icon} alt='' /> <p>+91 9140382231, +91 7380854703</p>

                        </div>
                        <div className='contact-detail'>

                            <img src={location_icon} alt='' /><p>Subroto Park,South-West-Delhi,Delhi - 110010</p>

                        </div>
                    </div>
                </div>




                <form onSubmit = {onSubmit} className='contact-right'>
                    <label htmlFor=''>Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor=''>Your Email</label>
                    <input type="email" placeholder="Enter you email" name='email' />
                    <label htmlFor=''>Write your message here </label>
                    <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
                    <button type="submit" className='contact-submit'>Submit Now</button> 
                    
                </form>





            </div>
        </div>
    )
}

export default Contact

