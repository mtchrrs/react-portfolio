import React from "react";
import "../App.css";
import { useForm } from "react-hook-form";

function Contact() {
    const {
        register,
        trigger,
        formState: {errors}
    } = useForm();

    const onSubmit = async (e) => {
        const isValid = await trigger();
        if(!isValid) {
            e.preventDefault();
        }
    }

    return (
        <div className="contactSection get-in-touch">

            <div className="contact-form">
                <form onSubmit = {onSubmit} action="https://formsubmit.co/ba26810ff68194fcbd7e8c41faa44672" method="POST">
                    
                    <h5 className="contact-name">Full Name</h5>
                    <input className="name-input" type="text" placeholder="Please type your name here" {...register("name",{ required: true, maxLength:100,})}></input>
                    {errors.name && (
                        <p className="">
                            {errors.name.type === "required" && "This field is required."}
                            {errors.name.type === "maxLength" && "Max length is 100 char."}
                        </p>
                    )}
                    
                    <h5 className="contact-email">Email Address</h5>
                    <input class="email-input" type="text" placeholder="Please type your email here" {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, })}></input>
                    {errors.email && (
                        <p className="">
                            {errors.email.type === "required" && "This field is required."}
                            {errors.email.type === "pattern" && "Invaild email address."}
                        </p>
                    )}

                    <h5 className="selector-id">What Can I Help You With?</h5>
                    <select className="selector-drop" name="selector" {...register("service", { required: false })}>
                        <option value="Web Development">Web Development</option>
                        <option value="Design Services">Design Services</option>
                        <option value="Illustrations">Illustrations</option>
                        <option value="Project Management">Project Management</option>
                        <option value="Consultation">Consultation</option>
                        <option value="Business opportunity">Business opportunity</option>
                        <option value="Other">Other</option>
                    </select>
                
                    <h5 className="contact-message">Message</h5>
                    <input className="message-input" type="text" placeholder="Please type your message or inquiry here" {...register("message", { required: true, maxLength: 2000 })}></input>
                    {errors.message && (
                        <p className="">
                            {errors.email.type === "required" && "This field is required."}
                            {errors.email.type === "maxLength" && "Max length is 2000 char."}
                        </p>
                    )}

                    <button type="submit" className="form-button" >Inquire Now</button>
                </form>
            
            </div>
        </div> 
    )
}

export default Contact;