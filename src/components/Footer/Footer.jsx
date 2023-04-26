import style from "./Footer.module.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';

export const Footer = ()=>{

	return (<>
	<div className={style.main} >
		<div className={style.containter} >
			<p className={style.heading} >
			   Our products
			</p>
			<p>
			   Flights
			</p>
		</div>
		<div className={style.containter} >
			<p className={style.heading} >
			    About TravelPey
			</p>
			<p>
			  Privacy Policy
			</p>
			<p>
			  Terms and Conditions
			</p>
			<p>
			  Contact Us
			</p>
			<p>
			  Cancellation Policy
			</p>
		</div>
		<div className={style.containter} >
			<p className={style.heading} >Connect With TravelPey</p>
			<div className={style.icons} >
			<a href="https://www.facebook.com/TravelPae/" target="_blank" style={{textDecoration: "none",color: "inherit"}} >
				<FacebookIcon 
				sx={{fontSize:{
					lg:"3vw",
					md:"5vw",
					sm:"5vw"
				}}}
				 />
				 </a>
				 <a href="https://www.instagram.com/travel.pae/?igshid=YmMyMTA2M2Y%3D" target="_blank" style={{textDecoration: "none",color: "inherit"}} >
				<InstagramIcon 
				sx={{fontSize:{
					lg:"3vw",
					md:"5vw",
					sm:"5vw"
				}}}
				/>
				</a>
				<a href="#" target="_self" style={{textDecoration: "none",color: "inherit"}} >
				<WhatsAppIcon
				sx={{fontSize:{
					lg:"3vw",
					md:"5vw",
					sm:"5vw"
				}}}
				/>
				</a>
				
			</div>
			<div className={style.callicon} >
			   <CallIcon  
			   
			   />  	 +1 8886763247
			</div>
			<div className={style.callicon} >
			   <MailIcon/> info@TravelPey.com
			</div>
		</div>
	</div>
	<div className={style.bottom} >
	  <div className={style.logo}  >
			<img src="https://travelpae.com/images/logo-bg.png" alt="BookXpert" width="30%" height="" />
			<p style={{fontSize:'30px',fontWeight:'bold',color:'#13595a'}} >TravelPey</p>
	  </div>
	</div>
	
	
	</>)
}