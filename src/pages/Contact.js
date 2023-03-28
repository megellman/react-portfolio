import React from 'react';
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm(
       { mode: "onBlur"}
    );
    const onSubmit = async data => {
    const templateParams = {
        name: `${data.firstName} ${data.lastName}`,
        message: data.message,
        email: data.email
    };

    await emailjs.send('service_90tn49n','template_2fyjduof', templateParams, 'uWyRr0laLf8YstsY_')
	.then((response) => {
	   console.log('SUCCESS!', response.status, response.text);
	}, (err) => {
	   console.log('FAILED...', err);
	});    
    };

    
    
    console.log(errors);
    return (
        <div>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-3'>
                    <input id='first' className='form-control' type="text" placeholder="First name" {...register("firstName", { required: true, maxLength: 20 })} />
                    {errors.firstName && <p role="alert">This section is required</p>}
                </div>

                <div className='mb-3'>
                    <input id='last' className='form-control' type="text" placeholder="Last Name" {...register("lastName", { required: true, maxLength: 20 })} />
                    {errors.lastName && <p role="alert">This section is required</p>}
                </div>


                <div className='mb-3'>
                    <input id='email' className='form-control' type="text" placeholder="Email" {...register("email", { 
                        required: true,
                        pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
                        })} />
                    {errors.email && <p role="alert">Invalid email</p>}
                </div>
                <div className='mb-3'>
                    <textarea id='message' className='form-control' placeholder="Message" {...register("message", { required: true, maxLength: 300 })} />
                    {errors.message && <p role="alert">This section is required</p>}
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Contact;