import { useState } from "react";
import styles from "../styles/RightDiv.module.css";
import Slider from 'react-rangeslider'
export const RightDiv = () => {
    const [value, setValue] = useState(144900);
    const [time, setTime] = useState(1);

    const handleChange = (value) => {
        setValue(value)

    }
    const handleTimeChange = (time) => {
        setTime(time)

    }
    return (
        <div className={styles.rightDiv}>
            {/*--------- brichure-div--------- */}
            <div className={styles.brochure_div}>
                <div>
                    <span>Official Brochure <br />Available</span>
                    <button>Whatsapp Brochure</button>
                </div>
                <img src="/image/bookimg.png" alt="img-book" />
            </div>
            {/* ---------tata-div-------- */}
            <div className={styles.Tata_div}>
                <div></div>
                <div>Tata Nexon EV <br /> Prime EMI Calculator</div>
            </div>
            {/* ----emi-div--------- */}
            <div className={styles.EMI_div}>
                <div className={styles.XM_div}>
                    <div>
                        <select>
                            <option>XM</option>
                        </select>
                    </div>
                    <p>₹ 14.49 Lakh</p>
                </div>
                <div></div>
                <span style={{fontSize:"14px", color: "rgb(166, 165, 165)"}}>For 5year @9% Interest Rate</span><br/>
                <span style={{color:"rgb(106, 105, 105)",fontSize:"14px"}}>*Interest may vary subject to your credit score.</span>
                <div style={{color:"rgb(106, 105, 105)",fontSize:"14px"}}>
                    <p>Loan Amount</p>
                    <p>₹ 1449000</p>
                </div>
                <div className='slider'>
                    <Slider
                        min={0}
                        max={1449000}
                        tooltip={false}
                        value={value}
                        onChange={handleChange}
                    />
                    <div style={{color:"rgb(106, 105, 105)",fontSize:"14px"}}>₹ {value}</div>
                </div>
                <div>
                    <p style={{color:"rgb(106, 105, 105)",fontSize:"14px"}}>Duration <span>(5 year)</span></p>
                </div>
                <div className='slider'>
                    <Slider
                        min={0}
                        max={5}
                        tooltip={false}
                        value={time}
                        onChange={handleTimeChange}
                    />
                    <div style={{color:"rgb(106, 105, 105)",fontSize:"14px"}}>{time} year</div>
                </div>
            </div>
        </div>
    )
}