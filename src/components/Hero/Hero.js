import React, { useEffect,useState, useRef } from "react";
// import { FaSlideshare } from "react-icons/fa";
import {
  HeroSection,
  HeroWrapper,
  HeroSlide,
  HeroSilder,
  HeroImage,
  HeroContent,
  Arrow,
  PrevArrow,
  NextArrow,
  SliderButtons,
} from "./heroElements";
import { Button } from "../Button";

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

//  auto slides for the images
useEffect(
    () => {
   const nextSlide =()=>{
       setCurrent(current => (current === length -1? 0 : current +1))
   }
   timeout.current = setTimeout(nextSlide, 4000)
    return function(){
       if(timeout.current){
           clearTimeout(timeout.current);
       }
    }
}, [current, length])

// next arrow functionality
  const nextSlide = () => {
    if(timeout.current){
        clearTimeout(timeout.current)};

    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  // previous arrow functionality
  const prevSlide =()=>{
    if(timeout.current){
        clearTimeout(timeout.current)};
        
      setCurrent(current === 0 ? length -1: current -1 );
  };

  if(!Array.isArray(slides) || slides.length <= 0){
      return null
  }

  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => {
          return (
            <HeroSlide key={index}>

                {index === current &&(
                    <HeroSilder>
                <HeroImage src={slide.image} alt={slide.alt} />
                <HeroContent>
                  <h1>{slide.title}</h1>
                  <p>{slide.price}</p>
                  <Button
                    to={slide.path}
                    primary="true"
                    css={`
                      max-width: 150px;
                    `}
                  >
                    {slide.label}
                    <Arrow />
                  </Button>
                </HeroContent>
              </HeroSilder>
                )}
              
            </HeroSlide>
          );
        })}
        <SliderButtons>
          <PrevArrow  onClick={prevSlide}/>
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
