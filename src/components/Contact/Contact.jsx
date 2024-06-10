import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "004e1242-d30b-4278-a940-86a88e07da44");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" srcset="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below.Your feedback, questions and suggestions are important to us as we strive to provide exceptional service to our digital community</p>
        <ul>
            <li> <img src={mail_icon} alt="" srcset="" />email@nepaldigisys.com</li>
            <li> <img src={phone_icon} alt="" srcset="" />01-5911134, +977-9851280029</li>
            <li><img src={location_icon} alt="" srcset="" />Dhobighat,Kathmandu,Nepal</li>
        </ul>


      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>  
                Your Name
            </label>
            <input type="text" name="name" placeholder='Enter your name' required />
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder='Enter your phone' required/>
            <label>Write your message </label>
            <textarea name="message" rows="6" id="" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit</button>
        </form>
        <span>{result} </span>

      </div>

    </div>
  )
}

export default Contact
