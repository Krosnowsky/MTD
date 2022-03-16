import React from 'react';
import '../Styles/Contact.css';
import '../Styles/Maps.css';
import Form from '../Components/Form';
import Maps from '../Components/Maps';
import ContactIcon from '../Components/ConatactIcon'

const Contact = () => {
    return ( 
        <>
        <div className="contact">
            <div className="side">
                <h2>Kontakt</h2>
                <div className="ContactContener"><ContactIcon/></div>
            <div className='maps'><Maps/></div>
            </div>
            <div><Form/></div>
        </div>
        </>
     );
}
 
export default Contact;