import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";
import "./MobileNav.css";
import { Avatar, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {LoginContext} from "../ContextApi/LoginContext"
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CallIcon from '@mui/icons-material/Call';

export default function TemporaryDrawer() {

  const scrollHandler = ()=>{
    window.scrollTo(0,0);
  }

  const {userLoggedIn, handleLogin, handleUserLogin} = useContext(LoginContext);

  const [open, setOpen] = useState(false);
  const handleOpen = (prop) => {
    setOpen(prop);
  };

  const logOut = ()=>{
    axios.get('https://book-expert-backend-ravi.onrender.com/user/logout')
    .then(function (response) {
      console.log(response);
      toast.success("user is logged out successfully !!")
      handleUserLogin(false);
      setOpen(false);
      localStorage.removeItem('userDetail');
      localStorage.removeItem('login')
    })
    .catch(function (error) {
      console.log(error);
      toast.error("somethings went wrong!");
    });
  }
  const user = JSON.parse(localStorage.getItem("userDetail"));
  const login = JSON.parse(localStorage.getItem("login"));

  return (
    <div>
      <Button
        onClick={() => {
          handleOpen(true);
        }}
      >
        <MenuIcon
          sx={{
            color: "#13595a",
            fontSize: {
              sm: "8vw",
              md: "8vw",
              lg: "3vw",
            },
          }}
        />
      </Button>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => {
          handleOpen(false);
        }}
      >
        <div className="container-drawer">
          <div>
            <div className="container-drawer-profile">
              
              <IconButton
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon
                  sx={{
                    color: "#0AB79B",
                  }}
                />
              </IconButton>
            </div>
            <Divider />
            <Link to="/" style={{textDecoration:'none'}} >
            <div
              onClick={() => {
                setOpen(false);
                scrollHandler()
              }}
              className="container-drawer-child"
              
            >
              Flights
            </div>
            </Link>
            
            <Divider />
            
            
            <Divider />
            <Link to="/Privacy" style={{textDecoration:'none'}}  >
            <div
              onClick={() => {
                setOpen(false);
                scrollHandler();
              }}
              className="container-drawer-child"
            >
              Privacy Policy
            </div>
            </Link>
           
            <Divider />
            <Link to="/TermCond" style={{textDecoration:'none'}} >
            <div
              onClick={() => {
                setOpen(false);
                scrollHandler();
              }}
              className="container-drawer-child"
            >
              Terms & Conditions
            </div>
            </Link>
            
            <Divider />
            <Link to="/" style={{textDecoration:'none'}} >
            <div
              onClick={() => {
                setOpen(false);
                scrollHandler();
              }}
              className="container-drawer-child"
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
              +1 8886763247
            </div>
            </Link>
            
            {/* <Divider />
            <div
              onClick={() => {
                setOpen(false);

              }}
              className="container-drawer-child"
            >
              Login
            </div> */}
            {/* <Divider /> */}
            {/* <div
              onClick={() => {
                setOpen(false);
              }}
              className="container-drawer-child"
            >
              Membership
            </div> */}
            {/* <Divider /> */}
            {/* <div
              onClick={() => {
                setOpen(false);
              }}
              className="container-drawer-child"
            >
              Help & Support
            </div> */}
            {/* <Divider />
            <div
              onClick={() => {
                setOpen(false);
              }}
              className="container-drawer-child"
            >
              Refer
            </div> */}
            {/* <Divider /> */}
          </div>
          {userLoggedIn?(<div>
            <Divider />
            <div
              onClick={() => {
                logOut();
              }}
              className="container-drawer-logOut"
            >
              <LogoutIcon />
              log out
            </div>
          </div>):(<></>)}
          
        </div>
      </Drawer>
    </div>
  );
}
