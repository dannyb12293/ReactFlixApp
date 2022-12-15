import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

const MovieSlider = () => {
  return (
    <Carousel autoPlay axis="horizontal" infiniteLoop>
    <div>
        <img src="https://i0.wp.com/www.heyuguys.com/images/2012/03/The-Avengers-banner-1.jpg?fit=1100%2C440&ssl=1" alt='avengers'/>
    
</div>
<div>
    <img src="https://www.paramountmovies.com/uploads/movies/sonic-the-hedgehog-2/sonic2-pmshare-1200x630.jpg"  alt='sonic2'/>
    
</div>
<div>
    <img src="https://savingtowardabetterlife.com/wp-content/uploads/2021/04/f9fastsaga-768x330.jpg" alt='fast9' />
   
    </div>
<div>
    <img src="https://i0.wp.com/haitiantimes.com/wp-content/uploads/2022/11/download-2.png?fit=1200%2C675&ssl=1" alt='blackpanther'/>
    
</div>
<div>
    <img src="https://i0.wp.com/nerd-tropolis.com/wp-content/uploads/2022/10/creed-III-posters.jpg?fit=1200%2C690&ssl=1" alt='creed'/>
    
</div>
    </Carousel>

  )
}

export default MovieSlider
