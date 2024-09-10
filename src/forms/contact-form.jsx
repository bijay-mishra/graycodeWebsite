import React, { useEffect, useState } from "react";
import htmlcontentservice from "../service/htmlcontentservice";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const ContactForm = () => {
  const [responseMessage, setResponseMessage] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const save = async (e) => {
    let response = await htmlcontentservice.SendMessage(e);
    if (response.Code === 200) {
      alert("Message Successfully Sent.");  // Show native alert
      reset();
    } else {
      setResponseMessage(response.Message);
      alert(response.Message);  // Show native alert for errors
    }
  };

  return (
    <>
      <form id="contact-form" onSubmit={handleSubmit((e) => save(e))}>
        <div className="row tp-gx-10">
          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="name"
                type="text"
                placeholder="Your Full Name*"
                {...register("FullName", {
                  required: "**Name Required.",
                  minLength:{
                    value:8,
                    message:"**Name must be atleast 8 character long."
                  },
                  pattern:{
                    value: /^[A-Za-z\s]+$/,
                    message:"**Name must contain only letters and spaces."
                  }
                })}
              
              />
               {errors.FullName && <p>{errors.FullName.message}</p>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="phoneNumber"
                type="text"
                placeholder="Phone Number"
                {...register("PhoneNumber", {
                  required: "**Phone Number Required.",
                 pattern:{
                  value: /^(\+\d{1,3}[- ]?)?\d{1,4}[- ]?\d{1,4}[- ]?\d{1,9}$/,
                  message:"** Invalid Phone Number."
                 }
                })}
               
              />
               {errors.PhoneNumber && <p>{errors.PhoneNumber.message}</p>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-contact-input" >
              <input
              style={{ width: "100%" }}
                name="email"
                type="email"
                placeholder="Email Address*"
                {...register("Email", {
                  required: "**Email Required.",
                })}
                required
                
              />
                    {errors.Email && <p>{errors.Email.message}</p>}
            </div>
          </div>
          
          <div className="col-md-12">
            <div className="tp-contact-input">
              <textarea
                name="message"
                placeholder="Enter Your Message here"
                {...register("MessageContent", {
                  required: "**Message Content Required.",
                })}
              />
               {errors.MessageContent && <p>{errors.MessageContent.message}</p>}
            </div>
          </div>
          <div className="tp-contact-btn mt-10">
            <button type="submit" className="tp-btn">
              Send Message
            </button>
          </div>
          {responseMessage && (
            <div className="response-message">{responseMessage}</div>
          )}
        </div>
      </form>
    </>
  );
};

export default ContactForm;
