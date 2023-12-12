import React from 'react'
import { Carousel } from 'react-carousel-minimal';
import "./header.scss"

function Header() {
    const data = [
        {
          image: "https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg.webp",
          caption: "<div class='slider_text'><p class='text_name'>Women New-Season</p> <h1>New Season</h1> <button>Shop Now</button></div>" 
        },
        {
          image: "https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg.webp",
          caption: "<div class='slider_text'><p class='text_name'>Men New-Season</p> <h1>New arrivals</h1> <button>Shop Now</button></div>"
        },
        {
          image: "https://preview.colorlib.com/theme/cozastore/images/slide-03.jpg.webp",
          caption: "<div class='slider_text'><p class='text_name'>Men New-Season</p> <h1>Jackets & Coats</h1> <button>Shop Now</button></div>"
        },
      ];


  return (
    <div id='header'>
        <Carousel
            data={data}
            time={2500}
            width="100%"
            height="100vh"
            radius="10px"
            automatic={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
          />
    </div>
  )
}

export default Header