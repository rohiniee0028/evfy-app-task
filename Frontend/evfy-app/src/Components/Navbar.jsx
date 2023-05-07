import { ImSearch } from "react-icons/im";
import { FaUserCircle } from "react-icons/fa";
import styles from "../styles/Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { storeSearchValue } from "../Redux/Car/CarAction";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logout } from "../Redux/User/Action";


export const Navbar = () => {
    const [searchValue, setSearchValue] = useState("");
    const { isAuth, name } = useSelector(store => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // ---------------function for hitting enter while search-----------------//

    const handleKeyPress = (e) => {
        if (e.key == "Enter") {
            console.log(searchValue);
            dispatch(storeSearchValue(searchValue))
            if (isAuth) {
                navigate("/carbikedata")
            }else{
                alert("Please Login First")
            }
            setSearchValue("");
        }
    }

     // -------------------logout-------------------------------//

    const handleLogout = () => {
        dispatch(logout())
        navigate("/")
    }


    return (
        <nav>
            <div className={styles.navbar_div}>
                <Link to="/"><img src="image/car&bike.png" alt="img-logo" /></Link>
                <div className={styles.search_div}>
                    <input
                        type="search"
                        placeholder="Search for Car or Bikes, E.g : XUV700 or BMW"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onKeyDown={(e) => handleKeyPress(e)}
                    />
                    <ImSearch />
                </div>
                <div className={styles.select_sign}>
                    <select>
                        <option value="--">Select City</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Bangalore">Bangalore</option>
                    </select>
                    <div className={styles.signin_icon}>
                        <FaUserCircle />
                        <div className={styles.drop_down}>
                            <span><Link to="/login">{isAuth ? name : "Sign In"}</Link></span>
                            {
                                isAuth ?
                                    <div className={styles.dropdown_content}>
                                        <span onClick={handleLogout}>Logout</span>
                                    </div>
                                : null
                            }

                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.navbar_routes}>
                <div className={styles.main_routes}>
                    <div>MAGAZINE</div>
                    <div>
                        <select>
                            <option>USED CARS</option>
                        </select>
                    </div>
                    <div>SELL CAR</div>
                    <div>
                        <select>
                            <option>NEW CARS</option>
                        </select>
                    </div>
                    <div>
                        <select>
                            <option>BIKES</option>
                        </select>
                    </div>

                    <div>WARRANTY</div>
                    <div>
                        <select>
                            <option>VIDEOS</option>
                        </select>
                    </div>
                    <div>
                        <select>
                            <option>CAR&BIKE SUPERSTORES</option>
                        </select>
                    </div>

                </div>
            </div>
        </nav>
    )
}