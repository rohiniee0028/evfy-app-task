import { useState } from "react";
import styles from "../styles/Signup.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
    const [show, setShow] = useState(false);    
    const Navigate = useNavigate();
    
    let [form, setForm] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        mobile: "",
    });

    //-----------show and hide password-------------------//

    const togglePassword = () => {
        setShow(!show);
    }

    //-------setting input values------------------------//

    const handleInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        console.log(form);
    }

    //-------------signup user function-----------------//

    const handleSignup = async(e) => {
        e.preventDefault();
        try{
            let response = await axios.post("https://evfy-backend.onrender.com/user/signup", {
                ...form,
            })
            let data = await response.data;
            if(data.status==="success"){
                console.log(data.status)
                alert("Signup Successfull")
                Navigate("/login")
                setForm({
                    fname: "",
                    lname: "",
                    email: "",
                    password: "",
                    mobile: "",
                })
            }
            else if(data.status === "User already Exists"){
                alert("User already Exists")  
            }
            else{
               alert("Something went wrong!!!.. Please signup again.") 
            }

            
        }
        catch(err){
            console.log(err);
        }
       
    }


    return (
        <div className={styles.signupdiv}>
            <h2 className={styles.headingTag}>Signup</h2>
            <form onSubmit={handleSignup} className={styles.form}>
                <label>First name:</label>
                <br />
                <input type="text" id="fname" name="fname" value={form.fname} placeholder="enter firstname" onChange={(e) => handleInput(e)} />
                <br />
                <label>Last name:</label>
                <br />
                <input type="text" id="lname" name="lname" value={form.lname} placeholder="enter lastname" onChange={(e) => handleInput(e)} />
                <br />
                <label>Email:</label>
                <br />
                <input type="email" id="email" name="email" placeholder="enter email" value={form.email} onChange={(e) => handleInput(e)} />
                <br />
                <label>Password:</label>
                <br />
                <input type={show ? "text" : "password"} name="password" value={form.password} id="password" placeholder="enter password" onChange={(e) => handleInput(e)} />
                <span className={styles.checkPassowrd}><input type="checkbox" onChange={togglePassword} />show password</span>
                <br />
                <label>Mobile No.:</label>
                <br />
                <input type="mobile" id="mobile" name="mobile" placeholder="enter mobile" value={form.mobile} onChange={(e) => handleInput(e)} />
                <br />
                <input type="submit" value="Signup" />
                <label className={styles.label_sign}><Link to="/login">Login ?</Link></label>
            </form>
        </div>
    )
}