import React, { useState } from 'react';
import './styles/image-slider.scss';

const ImageSlider = () => {
    const [sliderPos, setSliderPos] = useState(50);

    const handleSliderChange = (e) => {
        const newPos = e.target.value;
        setSliderPos(newPos);
    };

    return (
        <div className='image-slider-container'>
            <img className='img background-img' src="https://source.unsplash.com/featured/?filmcoloring"></img>
            <img className='img foreground-img' src="../assets/Colorwheel1.png" style={{ width: `${sliderPos}%` }}></img>
            <input
                type="range"
                min="1"
                max="100"
                value={sliderPos}
                className="slider"
                name='slider'
                id="slider"
                onChange={handleSliderChange}
            />
            <div className='slider-button' style={{ left: `calc(${sliderPos}% - 18px)` }}></div>
        </div>
    );
};

export default ImageSlider;