import style from "./Privacy.module.css";
import {Footer} from "../Footer/Footer";
export const Privacy = ()=>{

	return (<>
	<div className={style.main} >
		<div className={style.content} >
			<p className={style.heading} >
			PRIVACY POLICY
			</p>
			<p className={style.paira} >
			Privacy and security are essential to TravelPey. This privacy statement explains how TravelPey and its affiliates handle the data we gather about our visitors via our website and other customer service channels
			</p>
			<hr/>
		</div>
		<div className={style.content} >
			<p className={style.heading} >
			Types of Information Acquired
			</p>
			<p className={style.paira} >
			We gather the following personal information from you when you sign up for an account, request a transaction, join in a program, or otherwise contact us through our website.
			</p>
			<hr/>
		</div>
		<div className={style.content} >
			<p className={style.heading} >
			Identification and Contact details
			</p>
			<p className={style.paira} >
			Your complete name, date of birth, gender, and other information on government-issued identity documents are examples of this sort of information. In addition, your contact information, such as your email address, postal address, and phone numbers, is also collected.
			</p>
			<hr/>
		</div>
		<div className={style.content} >
			<p className={style.heading} >
			Financial information:
			</p>
			<p className={style.paira} >
			Financial data comprises information about your bank account and payment card, as well as information about its appropriateness and income, account balance, financial history, credit history, credit ratings, and so on.
			</p>
			<hr/>
		</div>
		<div className={style.content} >
			<p className={style.heading} >
			Usage Information
			</p>
			<p className={style.paira} >
			This includes information on how you access and use our websites, such as your interactions with others, photographs or material you publish on the side, your username, and other content you supply. With your consent, we can access your device's camera roll and camera. By using our website, you agree that any information you give or receive will be recorded, stored, and disclosed for any reason on our website.
			</p>
			<hr/>
		</div>
		<div className={style.content} >
			<p className={style.heading} >
			Changes to the privacy policy
			</p>
			<p className={style.paira} >
			This privacy policy may be updated from time to time to reflect new methods by which we treat your data. The last updated date will be updated if we make changes to this privacy policy. The new privacy policy will take effect as soon as it is posted on the website. We will notify you if we make substantial changes that impact your personal information. We urge you to check this page for the most up-to-date information on our privacy policies on a regular basis.
			</p>
			<hr/>
		</div>
		<div className={style.content} >
			<p className={style.heading} >
			Cookies Policy:
			</p>
			<p className={style.paira} >
			Cookies are used to improve our website performance and to customize it. These cookies potentially improve and personalize your experience on our website. It helps us learn about the user's interests, and the website can provide the user with features and services for additional purposes with the assistance of cookies. However, you may disable the cookies option to prevent them from being stored, but this will affect the functioning of our website.
			</p>
			<hr/>
		</div>
		

	</div>
	<Footer/>
	</>)
}