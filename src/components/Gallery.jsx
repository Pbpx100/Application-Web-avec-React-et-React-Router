import React, { useState } from 'react';
import arrowLeft from '../assets/ArrowLeft.svg';
import arrowRight from '../assets/ArrowRight.svg';
import style from '../styles/Gallery.module.css';

const Gallery = ({ imageArray, desc }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const displayArrow = imageArray.length > 1;

    const getNextIndex = (currentIndex, arrayLength) => {
        return currentIndex < arrayLength - 1 ? currentIndex + 1 : 0;
    };
    const getPrevIndex = (currentIndex, arrayLength) => {
        return currentIndex > 0 ? currentIndex - 1 : arrayLength - 1;
    };

    const next = () =>
        setCurrentIndex((prevIndex) => getNextIndex(prevIndex, imageArray.length));
    const previous = () =>
        setCurrentIndex((prevIndex) => getPrevIndex(prevIndex, imageArray.length));


    return (
        <div className={style.galleryContainer}>
            <img src={imageArray[currentIndex]} alt={desc} />
            {displayArrow && (
                <>
                    <div className={style.arrowContainer}>
                        <img src={arrowLeft} alt="Left Arrow" onClick={previous} className={style.arrow} />
                        <img src={arrowRight} alt="Right Arrow" onClick={next} className={style.arrow} />
                    </div>
                    <div className={style.indexContainer}>
                        <span>{`${currentIndex + 1}/${imageArray.length}`}</span>
                    </div>
                </>
            )}
        </div>
    );

}

export default Gallery;
