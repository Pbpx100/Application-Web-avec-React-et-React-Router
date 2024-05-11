import React from "react";
import { NavLink } from "react-router-dom";
import style from '../styles/Cards.module.css';

const Cards = ({ data }) => {
    const cardList = data.map((location) => {
        const { cover, title, id } = location;
        return (
            <NavLink to={`location/${id}`} key={id}>
                <div className={style.cardWrap}>
                    <img className={style.cardImage} src={cover} alt={title} />
                    <h2 className={style.cardTitle}>{title}</h2>
                </div>
            </NavLink>
        );
    });
    return <div className={style.cardContainer}>{cardList}</div>;
}
export default Cards;