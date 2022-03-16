import React from 'react';
import {NavLink} from "react-router-dom";
import '../Styles/Navi.css';
import Hamburger from '../Components/Hamburger';
import LogoImg from '../img/logo.png';


const navList =[
    {name:"strona główna" ,path:"/"},
    {name:"o fundacji" ,path:"/about"},
    {name:"publikacje" ,path:"/publication"},
    {name:"kontakt" ,path:"/contact"},
]


const Navi = () => {
    const navi = navList.map(item =>(
        <li key={item.name}>
             <NavLink to={item.path} exact={item.exact ? item.exact : "false"}>{item.name}</NavLink>
        </li>
    ))
    return (
        <ul>
            <div className='Logo'>
            <img src={LogoImg} alt="" />
            </div>
            {navi}
            <button className='burger'><Hamburger/></button>
        </ul>
      );
}
 
export default Navi;
