import React from "react";
import logo from '../assets/footerLogo.png';
import style from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <div className={style.container}>
            <img src={logo} alt={logo} />
            <span className={style.rights}>© 2024 Kasa. All rights reserved</span>
        </div>
    )
}