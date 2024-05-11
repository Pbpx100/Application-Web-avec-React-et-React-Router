import React from 'react';
import StarIcon from '../assets/star.svg';
import style from '../styles/Ratings.module.css';

export default function Ratings(rating) {
    const maxRating = 5;
    const numberOfStarts = parseInt(rating, 10);
    const numberOfEmptyStart = maxRating - numberOfStarts;
    const startIcons = Array.from({ length: numberOfStarts }, (_, i) => (
        <StartIcon key={i} classname={style.emptyStart} />

    ));
    const emptyStartIcons = Array.from({ length: numberOfEmptyStart }, (_, i) => (
        <StarIcon key={i} classname={style.emptyStar} />
    ));

    return (
        <div className={style.startWrap}>
            {startIcons}
            {emptyStartIcons}
        </div>
    )
} 