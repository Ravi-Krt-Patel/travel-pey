import {People} from "./People/People";
import {Tranding} from "./Tranding/Tranding";
import { FlightDetail } from "./FlightDetail/FlightDetail";
import {Footer} from "../Footer/Footer";
import {CarouselSlider} from "./Carousel/Carousel";
export const Home = ()=>{
	return (<>
	<FlightDetail/>
	<CarouselSlider/>
	<Tranding/>
	<People/>
	<Footer/>
	</>)
}