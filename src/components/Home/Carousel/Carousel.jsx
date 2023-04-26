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
	{ place:"Tajmahal",
	   img:"https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
     },
	 { place:"burj khalifa",
	   img:"https://images.unsplash.com/photo-1582120031356-35f21bf61055?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVyaiUyMGtoYWxpZmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
     },
	 { place:"australia",
	   img:"https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXVzdHJhbGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
     },
	 { place:"Tajmahal",
	   img:"https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
     },
	 { place:"burj khalifa",
	   img:"https://images.unsplash.com/photo-1582120031356-35f21bf61055?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVyaiUyMGtoYWxpZmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
     },
	 { place:"australia",
	   img:"https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXVzdHJhbGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
     },
	 { place:"Tajmahal",
	   img:"https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
     },
	 { place:"burj khalifa",
	   img:"https://images.unsplash.com/photo-1582120031356-35f21bf61055?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVyaiUyMGtoYWxpZmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
     },
	 { place:"australia",
	   img:"https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXVzdHJhbGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
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