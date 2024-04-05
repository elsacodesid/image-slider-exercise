import { useState } from 'react' 
import {ArrowBigLeft, ArrowBigRight, CircleDot, Circle} from 'lucide-react'
import './image-slider.css'

type ImageSliderProps = {
    images: {
        url: string
        alt: string
    }[]
}

export function ImageSlider({images}:ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0)

    function showNextImage(){
        setImageIndex(index => {
        if (index === images.length - 1 ) return 0
        return index + 1}) 
    }

    function showPrevImage(){
        setImageIndex(index => {
            if (index === 0) return images.length - 1
            return index - 1
        })

    }

    return ( 
        
    <section aria-label="Image Slider"><div style={{width: "100%", height: "100%", position: "relative" }}>
        <div><a href="#after-image-slider-controls" className="skip-link">Skip Image Slider Controls</a></div>
        <div style={{width: "100%", height: "100%", display: "flex", overflow: "hidden" }}>
            {images.map(({url, alt}, index)   => ( 
                <img key={url} src={url} alt={alt}
                className='img-slider-img' 
                style={{translate: `${-100 * imageIndex }%`}}
                aria-hidden={imageIndex !== index} />
                ))}
        
        </div>
        
        <button 
            onClick={showPrevImage} 
            className="img-slider-btn" 
            style={{ left: 0}}
            aria-label="View Previous Image"><ArrowBigLeft />
        </button>
        <button 
            onClick={showNextImage} 
            className="img-slider-btn" 
            style={{ right: 0}}
            aria-label="View Next Image"><ArrowBigRight />
        </button>
    <div style={{
        position: "absolute",
        bottom: ".5rem",
        left: "50%",
        translate: "-50%",
        display: "flex",
        gap: ".25rem", 

    }}>
        {images.map((_, index) => (
            <button key={index} 
            className="img-slider-dot-btn" 
            onClick={()=> setImageIndex(index)}
            aria-label={`View Image ${index} + 1`}>
                {index === imageIndex ? <CircleDot aria-hidden /> : <Circle />}
            
            </button>
        ))} 
    </div>
    </div>
    <div id="after-image-slider-controls">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolore fugiat eos? Et ipsam deserunt quis blanditiis laborum corrupti nobis quam dolorum autem praesentium. Quae illo voluptates a ut error.</div>
    </section> 
    )
}

