import style from "./FlightDetial.module.css";
import RowRadioButtonsGroup from "./Radio";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from '@mui/material/Button';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PersonIcon from '@mui/icons-material/Person';
export const FlightDetail = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.img} >
			<img src="https://travelpae.com/images/bags-rebg.png" alt="Travel" width="100%" />
		</div>
        <div>
			<div className={style.heading} >
			<p className={style.flight} >
			  FLIGHTS
			</p>
			<span className={style.flightDis} >
			  Get 20% off on your first flight
			</span>
			<div>
			<RowRadioButtonsGroup />
			</div>
			</div>
			
          
          <div className={style.inputContainer}>
            <div className={style.input}>
              <LocationOnIcon />
              <select className={style.inputField} name="cars" id="cars">
                <option value="none" selected disabled hidden>
                  Where from ?
                </option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className={style.input}>
              <LocationOnIcon />
              <select className={style.inputField} name="cars" id="cars">
                <option value="none" selected disabled hidden>
                  Where to ?
                </option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
			<div className={style.input}>
              <CalendarTodayIcon />
			  <input className={style.inputField} type="date"/>
              {/* <select className={style.inputField} name="cars" id="cars">
                <option value="none" selected disabled hidden>
                  Where from ?
                </option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select> */}
            </div>
			<div className={style.input}>
              <LocationOnIcon />
              <select className={style.inputField} name="cars" id="cars">
                <option value="1" >
                 1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
			<div className={style.input}>
              <LocationOnIcon />
              <select className={style.inputField} name="cars" id="cars">
                <option value="1" >
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
			<div className={style.input}>
              <LocationOnIcon />
              <select className={style.inputField} name="cars" id="cars">
                <option value="Economy" >
				    Economy
                </option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
			<div className={style.input}>
              <PersonIcon />
			  <input className={style.inputField} type="number" placeholder="Enter Mobile Number" />
              {/* <select className={style.inputField} name="cars" id="cars">
                <option value="none" selected disabled hidden>
                  Where from ?
                </option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select> */}
            </div>
          </div>
		  <div className={style.button} >
		     <Button 
			  variant="contained"
			  sx={{
				color:"black",
				width: {
					lg:"40%",
					md:"40%",
					sm:"50%",
					xs:"50%"
				},
				height: "54px",
				backgroundColor: "#ffd700",
                "&:hover": {
                 backgroundColor: "#ffd700 !important",
              },
              borderRadius: "20px",
			  fontWeight:"bold",
			  fontSize: {
				lg:"18px",
				sm:"12px"
			  }
			  }}
			 >Instant Book</Button>
		  </div>
        </div>
      </div>
    </>
  );
};
