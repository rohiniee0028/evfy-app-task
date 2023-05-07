import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllCarBike, getSearchedData } from "../Redux/Car/CarAction";
import styles from "../styles/CarBike.module.css";
import { Pagination } from "./Pagination";

export const CarsBikePage = () => {
    const dispatch = useDispatch();
    const {cars,pageCount,searchText,isAuth} = useSelector(store => store.car);
    const [page,setPage] = useState(1);
    const [limit,setLimit] = useState(5);

    useEffect(() => {
        dispatch(getAllCarBike(page,limit,searchText));
    }, [page,searchText])



    console.log("data-", cars)
    return (
        <div className={styles.CarsBikeDiv}>
            <div className={styles.grid_box}>
                {
                    cars?.map((el) => (
                        <div key={el._id} className={styles.grid_card}>
                            <img src={el.image_url} alt={el.title + " " + el._id} />
                            <h2 style={{padding: "0px 10px"}}>{el.brand}</h2>
                            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"-20px",padding: "0px 10px" }}>
                                <p>{el.name}</p>
                                <h3>₹ {el.price/1000} Lakh</h3>
                            </div> 
                            <span className={styles.para_grid}>{el.fuel_type} | {el.transmission} | {el.airbags ? "airbags : Yes" : "airbag : No"} | {el.seating} seats</span>
                            <br/>
                            <span style={{marginTop:"-10px",color:"rgb(106, 105, 105)",padding: "10px"}}>{el.variants}</span>
                        </div>
                    ))
                }

            </div>
            <Pagination totalPage={pageCount} page={page} onChange={(val)=>setPage(val)} />
        </div>
    )
}