import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from "./Carousel.module.css";


const responsive = {
	superLargeDesktop: {
	  // the naming can be any, depends on you.
	  breakpoint: { max: 4000, min: 3000 },
	  items: 5
	},
	desktop: {
	  breakpoint: { max: 3000, min: 1024 },
	  items: 3
	},
	tablet: {
	  breakpoint: { max: 1024, min: 464 },
	  items: 2
	},
	mobile: {
	  breakpoint: { max: 464, min: 0 },
	  items: 1
	}
  };


  const imgArr = [
	{ place:"Austin",
	   img:"https://www.gousa.in/sites/default/files/styles/16_9_770x433/public/images/hero_media_image/2016-12/Austin%20Lake%20Kayaking.jpg?itok=1dm2ydlT"
     },
	 { place:"Virgin Islands",
	   img:"https://www.gousa.in/sites/default/files/styles/16_9_770x433/public/images/hero_media_image/2016-12/USVI.jpg?itok=6e8h20ku"
     },
	 { place:"California",
	   img:"https://www.gousa.in/sites/default/files/styles/16_9_770x433/public/images/hero_media_image/2016-12/Palm%20Springs%20Canyon.jpg?itok=zlLMqO_-"
     },
	 { place:"Austin",
	   img:"https://www.gousa.in/sites/default/files/styles/16_9_770x433/public/images/hero_media_image/2016-12/Austin%20Lake%20Kayaking.jpg?itok=1dm2ydlT"
     },
	 { place:"Virgin Islands",
	   img:"https://www.gousa.in/sites/default/files/styles/16_9_770x433/public/images/hero_media_image/2016-12/USVI.jpg?itok=6e8h20ku"
     },
	 { place:"California",
	   img:"https://www.gousa.in/sites/default/files/styles/16_9_770x433/public/images/hero_media_image/2016-12/Palm%20Springs%20Canyon.jpg?itok=zlLMqO_-"
     },
	 { place:"Austin",
	   img:"https://www.gousa.in/sites/default/files/styles/16_9_770x433/public/images/hero_media_image/2016-12/Austin%20Lake%20Kayaking.jpg?itok=1dm2ydlT"
     },
	 { place:"Virgin Islands",
	   img:"https://www.gousa.in/sites/default/files/styles/16_9_770x433/public/images/hero_media_image/2016-12/USVI.jpg?itok=6e8h20ku"
     },
	 { place:"California",
	   img:"https://www.gousa.in/sites/default/files/styles/16_9_770x433/public/images/hero_media_image/2016-12/Palm%20Springs%20Canyon.jpg?itok=zlLMqO_-"
     },
	 
  ]

export const CarouselSlider = ()=>{

	return (<>
	<div className={style.main} >
		<div>
			<p className={style.heading} >Popular Flights Near You</p>
			<p className={style.paira} >Find dashing deals on domestic and international flights!</p>
		</div>
	</div>
	<div className={style.main} >

	<Carousel 
  swipeable={true}
  draggable={true}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={4000}
  keyBoardControl={true}
//   customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
//   removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  centerMode={true}
//   focusOnSelect={true}
	>
      
      {imgArr.map((el,key)=>(<div key={key} className={style.card} >
		<img src={el.img} alt="img" width="100%" height="100%"/>
		<p className={style.imgText} >{el.place}</p>
	  </div>))}
     </Carousel>
	</div>
   
	</>)
}