import style from "./People.module.css"

export const People = ()=>{

	return (<>
	<div className={style.main} >
		<div>
			<p className={style.content} >
			   What do people feel...
			</p>
			<div className={style.superMain} >
				<div className={style.imgMain} >
					<div className={style.img} >
						<img style={{borderRadius:"50% 50%"}} src="https://travelpae.com/images/user1.png" width="100%" alt="img" />
					</div>
					<div className={style.imgContent} >
						<p className={style.heading} >
						    RICHARD
						</p>
						<p>
                            Great experience buying tickets from you,I will buy it again for my next trip
						</p>
					</div>
				</div>
				<div className={style.imgMain} >
					<div className={style.img} >
						<img style={{borderRadius:"50% 50%"}} src="https://travelpae.com/images/user2.png" width="100%" alt="img" />
					</div>
					<div className={style.imgContent} >
						<p className={style.heading} >
						    THOMAS
						</p>
						<p>
                          I find TravelPey quick & easy,the pricing is great.thank you SAM.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div className={style.imgSection} >
			<img src={"https://travelpae.com/images/mahel2.png"} width="80%" alt="img" style={{margin:"auto"}} />
		</div>
	</div>
	</>)
}