import React, { useState } from "react";
import htmlcontentservice from "../service/htmlcontentservice";

const ServiceContactForm = () => {
  const [formData,setFormData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    message:"",
  })
  const [formStatus,setFormStatus]=useState(null)
  const handleChange=(e)=>{
const {name,value}=e.target;
setFormData({...formData, [name]:value})
  }
  const handleSubmit=async(e)=>{
e.preventDefault()
try{
  const response=await htmlcontentservice.SendMessage(formData)
  if(response.Code==200){
    setFormStatus("Message sent successfully")
  }else{
    setFormStatus("Failed to send message")
  }
}
catch(error){
  console.error("Error sending message:",error)
  setFormStatus("An error occured. Please try again later")
}
  }
  return (
    <>
      <form id="contact-form"
      onSubmit={handleSubmit}
       method="POST">
        <div className="row tp-gx-10">
          <div className="col-md-6">
            <div className="tp-service-contact-input">
              <input name="firstName"
               type="text"
                placeholder="Fast Name"
                value={formData.firstName}
                onChange={handleChange}
                />
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-service-contact-input">
              <input name="lastName"
               type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-service-contact-input">
              <input name="email"
               type="email" 
               placeholder="Email"
               value={formData.email} 
               onChange={handleChange}/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-service-contact-input">
              <input name="phone"
               type="text"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange} />
            </div>
          </div>
          <div className="col-md-12">
            <div className="tp-service-contact-input">
              <textarea name="message" 
              placeholder="Enter Message"
              value={formData.message}
              onChange={handleChange}
              required
              ></textarea>
            </div>
          </div>
          <div className="tp-service-contact-btn mt-10">
            <button type="submit" className="tp-btn">
              Send Message
            </button>
          </div>
        </div>
        {formStatus && <p>{formStatus}</p>}
      </form>
    </>
  );
};

export default ServiceContactForm;
