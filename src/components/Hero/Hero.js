import React, { useState } from 'react'
import Dropdown from '../Dropdown/Dropdown'
import Header from '../Header/Header'
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from './HeroElements'
import { TypeAnimation } from 'react-type-animation'
import ScrollAnimation from 'react-animate-on-scroll'

function Hero() {
  const [isOpen, setIsOpen] = useState(false)
  const [showSubtitle, setShowSubtitle] = useState(false)
  const [showScrollDown, setShowScrollDown] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            {/* Write full text paragragh on left side */}
            <p>
              Indulge in a symphony of flavors at our artisanal bakery. Welcome
              to a world where the aroma of freshly baked wonders captivates
              your senses. Our master bakers craft each creation with passion,
              using only the finest ingredients to ensure every bite is pure
              delight.
              {/* From this point move to next line */}
            </p>
            <br></br>
            <p>
              From flaky croissants to decadent cakes, experience the epitome of
              taste and craftsmanship. Whether it's a special occasion or a
              craving for the extraordinary, our bakery offers a haven for your
              palate. Elevate your moments with the magic of our oven-fresh
              delights. Your journey to exceptional taste begins here.
            </p>
          </HeroLeft>
          <HeroRight>
            <ScrollAnimation animateIn='fadeIn'>
              <Image src='/image 2.png' alt='bakery' />
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>
      </HeroContainer>
    </main>
  )
}

export default Hero
