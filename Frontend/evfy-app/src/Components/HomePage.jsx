import { Navbar } from "./Navbar";
import styles from "../styles/Home.module.css";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { LeftDiv } from "./LeftDiv";
import { RightDiv } from "./RightDiv";
import CarSlider from "./CarSlider";
import { SummerCars } from "./SummerCars";
import { Footer } from "./Footer";


export const HomePage = () => {
    return (
        <div className={styles.homepage_div}>
            <div>
                <video style={{ width: "100%", height: "100%" }} preload={"auto"} autoPlay loop muted>
                    <source src="https://images.carandbike.com/wms/May2023_Iphone_Offer_Desktop_Banner_Used_Car_1_3bb8d9036d.mp4" type="video/mp4" />
                </video>
            </div>
            <div className={styles.below_routes}>
                <div>Overview</div>
                <div>Specs & Features</div>
                <div>Variants</div>
                <div>Colo₹</div>
                <div>Compare</div>
                <div>News</div>
                <div>FAQs</div>
            </div>
            <div className={styles.left_right_div}>
                <LeftDiv />
                <RightDiv />
            </div>
            <CarSlider />
            <div className={styles.price_india}>
                <div style={{ color: "rgb(166, 165, 165)" }}>Tata Nexon EV Prime Price in India</div>
                <div className={styles.bootom_border}></div>
                <div className={styles.price_table}>
                    <div>
                        <ul>
                            <li>City</li>
                            <li>Hyderabad</li>
                            <li>New Delhi</li>
                            <li>Mumbai</li>
                            <li>Kolkata</li>
                            <li>Ahemdebad</li>
                            <li>Karnataka</li>

                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>On-Road Price</li>
                            <li>₹ 18.82 Lakh</li>
                            <li>₹ 17.42 Lakh</li>
                            <li>₹ 16.32 Lakh</li>
                            <li>₹ 15.02 Lakh</li>
                            <li>₹ 17.82 Lakh</li>
                            <li>₹ 16.82 Lakh</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>City</li>
                            <li>Kolkata</li>
                            <li>Ahemdebad</li>
                            <li>Hyderabad</li>
                            <li>New Delhi</li>
                            <li>Mumbai</li>
                            <li>Karnataka</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>On-Road Price</li>
                            <li>₹ 15.82 Lakh</li>
                            <li>₹ 16.72 Lakh</li>
                            <li>₹ 17.92 Lakh</li>
                            <li>₹ 18.12 Lakh</li>
                            <li>₹ 16.02 Lakh</li>
                            <li>₹ 15.52 Lakh</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>City</li>
                            <li>Mumbai</li>
                            <li>Kolkata</li>
                            <li>Ahemdebad</li>
                            <li>Karnataka</li>
                            <li>Uttarpradesh</li>
                            <li>Bangalore</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>On-Road Price</li>
                            <li>₹ 17.82 Lakh</li>
                            <li>₹ 18.82 Lakh</li>
                            <li>₹ 16.60 Lakh</li>
                            <li>₹ 15.82 Lakh</li>
                            <li>₹ 17.52 Lakh</li>
                            <li>₹ 16.82 Lakh</li>
                        </ul>
                    </div>
                </div>
            </div>
           <SummerCars/>
           <Footer/>
        </div>
    )
}