import axios from 'axios';
import React, { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import '../Component/Stylesheet.css'

type FormState = {
    email: string;
    name: string;
    message: string;
};

type ServiceMessage = {
    text: string;
}
 
const Contact = () =>{
    const formId = 'eYyr98M1';
    const formSparkUrl = `https://submit-form.com/${formId}`;

    const initialFormState = {
        email: "",
        name: "",
        message: "",
    };


    const [formState, setFormState] = useState <FormState> (initialFormState);
    const [submitting, setSubmitting] = useState <boolean>(false);
    const [message, setMessage] = useState<ServiceMessage>();

    const updateFormControl = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    {
        const {id, value} = event.target;
        const formKey = id as keyof FormState;
        const updatedFormSate = {...formState};
        updatedFormSate [formKey] = value;
        setFormState(updatedFormSate);
    };

    const submitForm = async(event: FormEvent) => {
        event.preventDefault();
        setSubmitting(true);
        await postSubmission();
        setSubmitting(false);
    };

    const postSubmission = async () => {
        const payload = {
           ...formState,
          "g-recaptcha-response":recaptchaToken

        };

        try {
            const result = await axios.post(formSparkUrl,payload);
            console.log(result);
            setMessage({
                text : 'Thanks, You will recieve a response shortly.',
            });
            setFormState(initialFormState);
            recapthcaRef.current.reset();

        } catch (error)
        {
            console.log(error);
            setMessage({
                text : 'Sorry, Problem occured while submitting form.',
            });
            
        }
    };
    const recaptchaKey ='6LegIIkeAAAAAGe7NUmUfMOBIAcQqhdUgOVSbxeN';
    const recapthcaRef = useRef<any>();
    const [recaptchaToken ,setRecaptchaToken] = useState<string>();

    const updateRecaptchaToken = (token: string | null) =>{
        setRecaptchaToken(token as string);
    };
    
    return(
        <div className = "h-full flex justify-center flex-col">
            <div className ="w-2/3 m-auto p-8 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" 
            className="plane"
            viewBox="-140-1 300 20"
            fill="currentColor">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 
            1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
                <h1 className = "text-4xl font-bold  text-center">
                    <span>CONTACT US</span>
                </h1>
                {message && <div className ={`my-4 text-black w-full p-4 class text-center`}> 
                {message.text}
                </div>}
                <hr/>
                <form onSubmit = {submitForm} className = "flex flex-col">
                    <div className = "my-2 flex flex-col">
                        <label htmlFor ="name" className="name text-center">Name</label>
                        <input 
                        onChange = {updateFormControl}
                        type = "text"
                        className = "namebox border-2 p-2 w-50" 
                        id = "name" 
                        value = {formState.name}
                        />
                    </div>
                    <div className = "my-2 flex flex-col">
                        <label htmlFor ="email" className="name text-center">Email</label>
                        <input 
                        onChange = {updateFormControl}
                        type = "text"
                        className = "namebox border-2 p-2 w-50" 
                        id = "email" 
                        value = {formState.email}
                        />
                    </div>
                    <div className = "my-2 flex flex-col">
                        <label htmlFor ="name" className="name text-center">Message</label>
                        <textarea 
                        onChange = {updateFormControl}
                        className = "namebox border-2 p-2 w-50" 
                        id = "message" 
                        value = {formState.message}
                        />
                    </div>
                    <ReCAPTCHA
                    className = "recaptcha"
                    ref = {recapthcaRef}
                    sitekey = {recaptchaKey}
                    onChange = {updateRecaptchaToken}
                />
                <br/>

                  <button disabled = {submitting} className = "button w-50 text-white">
                    {submitting ? 'Submitting...' : 'Submit'}
                    </button>  
                </form>
                <br/>
            </div>
         </div>

    );
}
export default Contact;