import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../styles/Error404.module.css';

export default function Error404() {
    return (
        <div className={style.container}>
            <div className={style.textWrap}>
                <span className={style.error}>404</span>
                <span className={style.errorMessage}>Oups! La page que vos demandez n'exsite pas</span>
                <NavLink to="/" className={style.linkToHome}>
                    Retourne sur la page d'accueil
                </NavLink>
            </div>
        </div>
    )
}