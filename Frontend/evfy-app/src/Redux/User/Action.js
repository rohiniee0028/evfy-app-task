import axios from "axios";
import { SUCCESS_LOGIN, SUCCESS_LOGOUT } from "./ActionTypes";


export const loginUser = (form) => async(dispatch) => {
   try{
     let res = await axios.post('https://evfy-backend.onrender.com/user/login',{...form});
     let data = await res.data;
     console.log(data)
     if(data.status === "ok"){
        dispatch({type:SUCCESS_LOGIN, payload : {
            token : data.token,
            name:data.name
        }})
        alert("User loggedIn Successfully");
        console.log(data);
        let token = data.token
        localStorage.setItem('token-evfy',JSON.stringify(token))
     }
     else if(data.status === "User Not Registered"){
        alert("User Not Registered");
     }
     else{
        alert("Something went wrong. Please try again later")
        console.log(data.error)
     }
   }
   catch(err){
    console.log(err);
   }
}

export const logout = () => (dispatch)=> {
   dispatch({type:SUCCESS_LOGOUT})
}