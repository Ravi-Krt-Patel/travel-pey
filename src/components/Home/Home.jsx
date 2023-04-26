import {People} from "./People/People";
import {Tranding} from "./Tranding/Tranding";
import { FlightDetail } from "./FlightDetail/FlightDetail";
import {Footer} from "../Footer/Footer";
export const Home = ()=>{
	return (<>
	<FlightDetail/>
	<Tranding/>
	<People/>
	<Footer/>
	</>)
}