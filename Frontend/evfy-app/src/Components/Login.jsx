import { useEffect, useState } from "react";
import styles from "../styles/Signup.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logout } from "../Redux/User/Action";

export const Login = () => {
    const [show, setShow] = useState(false);
    const { isAuth } = useSelector(store => store.user);
    const Navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuth) {
            Navigate("/")
        }
    }, [isAuth])

    let [form, setForm] = useState({
        email: "",
        password: "",
    });

    //-----------show and hide login password-------------------//

    const togglePassword = () => {
        setShow(!show);
    }

    //-------setting login input values------------------------//

    const handleInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        console.log(form);
    }

    //---------------login User function-----------------------//

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginUser(form))

        setForm({
            email: "",
            password: "",
        })
    }

    return (


        <div className={styles.signupdiv}>
            <h2 className={styles.headingTag}>Login</h2>
            <form onSubmit={handleLogin} className={styles.form}>
                <label>Email:</label>
                <br />
                <input type="email" id="email" name="email" placeholder="enter email" value={form.email} onChange={(e) => handleInput(e)} />
                <br />
                <label>Password:</label>
                <br />
                <input type={show ? "text" : "password"} name="password" value={form.password} id="password" placeholder="enter password" onChange={(e) => handleInput(e)} />
                <span className={styles.checkPassowrd}><input type="checkbox" onChange={togglePassword} />show password</span>
                <br />
                <div className={styles.log_link}>
                    <label className={styles.forgot}><Link to="/forget">Forgot Passowrd ?</Link></label>
                    <label className={styles.forgot}><Link to="/signup">Register</Link></label>
                </div>
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>

    )
}