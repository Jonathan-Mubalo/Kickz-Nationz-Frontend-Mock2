import React, {useRef} from 'react';
import { useNavigate } from 'react-router-dom';


const  Home = () => {

    const logOut = useRef();
   const navigate = useNavigate();


const handleLogOut = () =>{
   
   
    localStorage.setItem("login", JSON.stringify({"isLoggedIn":false}));
const access = JSON.parse(localStorage.getItem("login"));

    console.log( " Home Page Log out: "+ access.isLoggedIn)

    navigate("/Login")
}

    return (  
<><h1>THIS IS THE Home PAGE</h1>
<button ref={logOut} onClick={handleLogOut} >Logout Btn</button>
</>
    );
}
 
export default Home;