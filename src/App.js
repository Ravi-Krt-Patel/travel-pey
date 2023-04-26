import NavBar from "./components/NavBar/NavBar.jsx";
import {MobileNav} from "./components/NavBar/MobileNav.jsx";
import {Home} from "./components/Home/Home.jsx"
import {Privacy} from "./components/Privacy/Privacy.jsx"
import {TermCond} from "./components/TermCond/TermCond.jsx";
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<>
          <MobileNav/>
          <NavBar/>
      </>} >
          <Route index element={<Home/>} ></Route>
          <Route path="/Privacy" element={<Privacy/>} ></Route>
          <Route path="/TermCond" element={<TermCond/>} ></Route>
      </Route>
    </Routes>
    </>
  );
}

export default App;
