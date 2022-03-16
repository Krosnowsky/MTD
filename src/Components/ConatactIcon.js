import React from 'react';
import {NavLink} from 'react-router-dom';
import '../Styles/ConatactIcon.css'
import phone from "../img/phone_2.png"
import mail from "../img/mail.png"

const ContactIcon = () => {
    return ( 
            <div className='ConatactIcon'>
            <a href="tel:555666777">
                <img src={phone} alt="" />
                <p>Telefon</p>
                <p>+48555666777</p>
            </a>
            <a href="mailto:ddd@ddd.com">
                <img src={mail} alt="" />
                <p>Mail</p>
                <p>ddd@ddd.com</p>
            </a>
            </div>
     );
}
 
export default ContactIcon;