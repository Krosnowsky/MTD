import React, { useState, useEffect } from 'react';

import '../Styles/Form.css'

const Form = () => {
    const initialValues = {email:"" , message:""};
    const [formValues, setFormValues]=useState(initialValues);
    const [formErrors, setFormErrors]=useState({});
    const [isSubmit, setIsSubmit ] = useState(false);
    const handleChange = (e) =>{
            
            const{name, value}=e.target;
            setFormValues({...formValues, [name]: value})
            console.log(formValues)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true)
    }
    useEffect(()=>{
        console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
        }
    },[formErrors])
    const validate =(values)=>{
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        // const regex = ^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$;
        if(!values.email){
            errors.email = " Email jest wymagany"
           
        }else if(!regex.test(values.email)){
            errors.emaill = "nie właściwy format email"
        }
        if(!values.message){
            errors.message = " Treść wiadomości jest wymagana"
            
        }
        return errors;
    }
    return ( 
        <>
        <h3 className='formTitle'>Mozesz skontaktować sie przez nasz formularz </h3>
        <form onSubmit={handleSubmit}>
            <p className='err'>{formErrors.emaill}</p>
            <input 
                type="text" 
                name="email" 
                className={formErrors.email ?  "formErr":""}
                placeholder={formErrors.email ? formErrors.email : "Email"}
                value={formValues.email}
                onChange={handleChange}
            />
            
            <textarea 
                name="message" 
                className={formErrors.message ?  "formErr":""}
                placeholder={formErrors.message ? formErrors.message : "Wiadomość"} 
                value={formValues.message}
                onChange={handleChange}
            ></textarea>
            <button className='submit'>Wyślij</button>
        </form>
        </>
     );
}
 
export default Form;