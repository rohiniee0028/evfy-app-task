import { ImDroplet } from "react-icons/im";
import styles from "../styles/LeftDiv.module.css";
import { AiOutlineTransaction } from "react-icons/ai";
import { BsBatteryCharging } from "react-icons/bs";
import { FaChargingStation } from "react-icons/fa";
import { MdEventSeat } from "react-icons/md";
import { GiCarSeat } from "react-icons/gi";
import { RiThumbDownFill, RiThumbUpFill } from "react-icons/ri";



let arr = [

]

export const LeftDiv = () => {
    return (
        <div className={styles.leftdiv}>
            <div>
                <div style={{color:"rgb(166, 165, 165)"}}>Nexon EV Prime Overview</div>
                <div className={styles.bootom_border}></div>
                <div className={styles.overview_flex}>
                    <div>
                        <ImDroplet size="20px" color='rgb(166, 165, 165)'/>
                        <div className={styles.para_flex}>
                            <span>Fuel Type</span>
                            <span>Electric</span>
                        </div>
                    </div>
                    <div>
                        <AiOutlineTransaction size="20px" color='rgb(166, 165, 165)'/>
                        <div className={styles.para_flex}>
                            <span>Transmission</span>
                            <span>Automatic</span>
                        </div>
                    </div>
                    <div>
                        <BsBatteryCharging size="20px" color='rgb(166, 165, 165)'/>
                        <div className={styles.para_flex}>
                            <span>Battery Range</span>
                            <span>312KM/Full Charge</span>
                        </div>
                    </div>
                    <div>
                        <FaChargingStation size="20px" color='rgb(166, 165, 165)'/>
                        <div className={styles.para_flex}>
                            <span>Charging Time</span>
                            <span>8.5 Hrs</span>
                        </div>
                    </div>
                    <div>
                        <MdEventSeat size="20px" color='rgb(166, 165, 165)'/>
                        <div className={styles.para_flex}>
                            <span>Seating</span>
                            <span>5 Seater</span>
                        </div>
                    </div>
                    <div>
                        <GiCarSeat size="20px" color='rgb(166, 165, 165)'/>
                        <div className={styles.para_flex}>
                            <span>Airbags</span>
                            <span>Yes</span>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <div style={{color:"rgb(166, 165, 165)"}}>C&B Verdict on Tata Nexon EV Prime</div>
                <div className={styles.bootom_border}></div>
                <div className={styles.CB_Verdict}>
                    <div>
                        <p>car&Bike Expert Rating</p>
                        <div className={styles.green_circle}><div>8.5</div></div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, temporibus eius expedita blanditiis sunt, consequuntur id sed quae ipsum eos illum facilis. Ut animi asperiores molestias eos, aut laboriosam consequuntur.</p>
                </div>
            </div>
            <div>
                <div style={{color:"rgb(166, 165, 165)"}}>Pros & Cons of Tata Nexon EV Prime</div>
                <div className={styles.bootom_border}></div>
                <div className={styles.pros_cons}>
                    <div className={styles.liked}>
                        <div className={styles.likedicons}>
                            <RiThumbUpFill color="rgb(6, 232, 6)" size="20px"/>
                            <span  style={{color:"rgb(166, 165, 165)"}}>Things We Like</span>
                        </div>
                        <ul>
                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                            <li>Odio illum quod rerum, excepturi iste,</li>
                            <li> libero quia laboriosam deserunt ad est quidem! Maxime harum, enim ducimus quasi saepe sunt asperiores atque.</li>
                        </ul>
                    </div>
                    <div className={styles.notliked}>
                        <div className={styles.likedicons}>
                            <RiThumbDownFill  color="red" size="20px"/>
                            <span  style={{color:"rgb(166, 165, 165)"}}>Things We Dont't Like</span>
                        </div>
                        <ul>
                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                            <li>Odio illum quod rerum, excepturi iste,</li>
                            <li> libero quia laboriosam deserunt ad est quidem! Maxime harum, enim ducimus quasi saepe sunt asperiores atque.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}