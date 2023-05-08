import { useState } from "react";
import styles from "../styles/forget.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

export const ForgetPassword = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = async(e) =>{
       e.preventDefault();
       try{
          let res = await axios.post('https://evfy-backend.onrender.com/user/forgot-password',{
            email:email
          });
          let data = await res.data;
          console.log("data",data)
          if(data.status==="Email sent"){
              alert("Email has been sent. Please check your mail");
          }
          else if(data.status==="User Not Exists!!"){
             alert("User not Exist")
          }
          else{
            alert("Something went wrong, Please try later!!!")
          }

       }
       catch(err){
         console.log(err);
       }
    }
    return (
        <div className={styles.forgetdiv}>
            <h2 className={styles.headingTag}>Forgot Password</h2>
            <br/>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input type="email" id="email" placeholder="enter email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <br/>
                <input type="submit" value="Submit" />
                <label><Link to="/signup">Register ?</Link></label>
            </form>
        </div>
    )
}