

import style from "./NavBar.module.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import { useContext } from "react";
import {LoginContext} from "../ContextApi/LoginContext";
import "./LogNavBar.css";


import {LoginDrawer} from "./LoginDrawer";



import "./MobileNav.css";

import { Drawer,
	Box,
	Typography,
	IconButton,
	Menu,
	MenuItem 
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PaymentIcon from "@mui/icons-material/Payment";
import TemporaryDrawer from "./Drawer";
import { useNavigate } from "react-router-dom";


export const MobileNav = ()=>{

	const [open, setOpen] = useState(false)
	const [anchor, setAnchor] = useState(true)
	const  handleClose =()=>{
		setAnchor(false)
	}
	const {
		//  handleUserSignUp, 
		userLoggedIn,
		 handleLogin,handleSearch } = useContext(LoginContext);

	const [text, setText] = useState("");
	const handleText = (e)=>{
		setText(e.target.value);
	}
	const navigate = useNavigate()

	return (<>
	<div className="Mob-container" >
		<div className="container-child1" >
		 <img src="https://travelpae.com/images/logo-bg.png" alt="BookXpert" width="100%" height="" />
		 <span style={{fontSize:'4vw',fontWeight:'bold',color:'#13595a'}} >TravelPey</span>
		</div>
		<div className="container-child2" >
			<TemporaryDrawer/>
		</div>
	</div>
	
	</>)
}