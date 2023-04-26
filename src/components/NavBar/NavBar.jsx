
import style from "./NavBar.module.css";
import Button from '@mui/material/Button';
import "./LogNavBar.css";
import CallIcon from '@mui/icons-material/Call';
import { Outlet,Link } from "react-router-dom";


const NavBar = ()=>{

		 const scrollHandler = ()=>{
			window.scrollTo(0,0);
		  }
	
	

	return (<>
	<div className={style.container} >
		
		<Link to="/" style={{textDecoration:'none'}} >
		  <div className={style.logo} onClick={scrollHandler} >
			<img src="https://travelpae.com/images/logo-bg.png" alt="BookXpert" width="100%" height="" />
			<span style={{fontSize:'30px',fontWeight:'bold',color:'#13595a'}} >TravelPey</span>
		  </div>
		  </Link>
		<div className={style.Navbutton} >

			
			<Link to="/" style={{textDecoration:'none'}} >
			<div className={style.item} onClick={scrollHandler} >
				{/* About us */}
				
				<Button variant="text" sx={{
					color:'#13595a',
					fontWeight:800,
					width:'5vw'
				}}
				>Flights</Button>
				
			</div>
			</Link>
			
			
			<Link to="/Privacy" style={{textDecoration:'none'}} >
			  <div className={style.item} onClick={scrollHandler} >
			   <Button variant="text" sx={{
				fontWeight:800,
					color:'#13595a'
				}} >
				Privacy Policy</Button>
				
			  </div>
			  </Link>
			
		
		<Link to="/TermCond" style={{textDecoration:'none'}} >
			 <div className={style.item} onClick={scrollHandler} >
			   <Button variant="text" sx={{
				fontWeight:800,
					color:'#13595a'
				}} >Terms & Conditions</Button>
				
			 </div>
		

			 </Link>
			
			<div className={style.item} >
			   <Button variant="text" sx={{
				fontWeight:800,
					color:'#13595a'
				}}
				onClick={()=>{
					
				}}
				 >
					<CallIcon  
			   sx={{backgroundColor:'red',
			   borderRadius:'50% 50%',
			   padding:'5px',
			   color:'white',
			   fontSize:'15px'
			}}
			   />
	&nbsp;
				 +1 8886763247</Button>
				
			</div>
			
		</div>
	</div>
	<Outlet/>
	</>)
}

export default NavBar;