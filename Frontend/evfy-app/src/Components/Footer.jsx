import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { ImTwitter, ImYoutube } from "react-icons/im";
import styles from "../styles/Footer.module.css";

export const Footer = () => {
    return (
        <div className={styles.footer_div}>
            <div>
                <ul>
                    <li>car&bike</li>
                    <li>About Us</li>
                    <li>New Cars</li>
                    <li>Used Cars</li>
                    <li>New Bikes</li>
                    <li>Sell Your Car</li>
                    <li>Terms and Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Investor Relations</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Popular Car Brands</li>
                    <li>Maruti Suzuki</li>
                    <li>Hyundai</li>
                    <li>Tata</li>
                    <li>Volkswagan</li>
                    <li>Honda</li>
                    <li>Mahindra </li>
                    <li>kia</li>
                    <li>MG</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Popular Car Models</li>
                    <li>Mahindra XUV700</li>
                    <li>Kia Seltos</li>
                    <li>Mahindra Thar</li>
                    <li>Tata Nexon</li>
                    <li>Kia Sonet</li>
                    <li>Tata Punch</li>
                    <li>MG Hector</li>
                    <li>Honda City</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Popular Bike Brands</li>
                    <li>Royal Enfield</li>
                    <li>Honda</li>
                    <li>KTM</li>
                    <li>Tata Nexon</li>
                    <li>Kia Sonet</li>
                    <li>Tata Punch</li>
                    <li>MG Hector</li>
                    <li>Honda City</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Popular Bike Models</li>
                    <li>Royal Enfield</li>
                    <li>Honda</li>
                    <li>KTM</li>
                    <li>Tata Nexon</li>
                    <li>Kia Sonet</li>
                    <li>Tata Punch</li>
                    <li>MG Hector</li>
                    <li>Honda City</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>keep in touch</li>
                    <li>
                        <div style={{display:"flex", gap:"5px"}}><ImYoutube /><ImTwitter/><BsInstagram/><BsFacebook/><BsLinkedin/></div>
                    </li>
                </ul>
            </div>
        </div>
    )
}