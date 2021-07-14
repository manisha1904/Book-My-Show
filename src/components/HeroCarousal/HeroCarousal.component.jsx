import React from "react";
import HeroSlider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () =>{
	const settings = {
	arrows:true,
	centerMode:true,
	centerPadding:"60px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const images=["https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1626238586896-3e005566e0ae?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1626180940538-8a546be21b88?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1626233127008-5431435e7a57?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1626161800195-9426002066e3?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"];

	return (
		<>
			<HeroSlider {...settings}>
			{images.map((image)=>(
				<div className="w-20 h-80">
					<img src={image} alt="testing" className="w-full h-full"/>
				</div>

			))}
				
			</HeroSlider>
			
		</>
		);

};

export default HeroCarousal;