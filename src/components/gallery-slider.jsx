'use client';

import { useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import useEmblaCarousel from 'embla-carousel-react'

function GallerySlider({ sliderImageFiles }) {
    const [emblaRef, emblaApi] = useEmblaCarousel();

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi]);

    return (
        <div className="embla">
            <button className="embla__btn" onClick={scrollPrev}><FaChevronLeft /></button>
            <div ref={emblaRef} className='embla__gradient'>
                <div className="embla__container">
                    {sliderImageFiles.map((image, index) => (
                        <img key={index} src={`images/slider/${image}`} alt="slider billede" className="embla__slide" />
                    ))}
                </div>
            </div>
            <button className="embla__btn" onClick={scrollNext}><FaChevronRight /></button>
        </div>
    );
}

export default GallerySlider;