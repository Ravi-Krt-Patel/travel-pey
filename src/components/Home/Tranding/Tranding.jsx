import style from "./Tranding.module.css";

export const Tranding = ()=>{

	return (<>
	<div className={style.main} >
		<p className={style.content} >
		   Trending Activities
		</p>
		<p style={{fontWeight:"500"}} >
		   Top 3 offers for you in this month! Grab these amazing offers using the coupon codes.
		</p>
		<div className={style.img} >
			<img src="https://travelpae.com/images/trending.png" alt="img" width="100%" height=""/>
		</div>
	</div>
	</>)
}