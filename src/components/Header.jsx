import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/headerLogo.png';
import style from '../styles/Header.module.css';

export default function Header() {
    return (
        <header>
            <div>
                <NavLink to="/">
                    <img src={logo} className="logo" alt="" />
                </NavLink>
            </div>
            <ul className={style.homeNav}>
                <li>

                    <NavLink to="/">Accueil</NavLink>
                </li>
                <li>
                    <NavLink to="about">A Propos</NavLink>
                </li>
            </ul>
        </header>
    )
}