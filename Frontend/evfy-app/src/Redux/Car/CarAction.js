import axios from "axios";
import { FAILURE_CARS_BIKES, GET_SUCCESS_CARS_BIKES, REQUEST_CARS_BIKES, STORE_SEARCH_VALUE } from "./CarActionTypes";


export const getAllCarBike = (page, limit,search) => async (dispatch) => {
    try {
        let res;
        if(search!==""){
            res = await axios.get(`https://evfy-backend.onrender.com/carbikedata/${search}?page=${page}&limit=${limit}`);
        }else{
            res = await axios.get(`https://evfy-backend.onrender.com/carbikedata?page=${page}&limit=${limit}`);
        }
        let data = await res.data;
        console.log(data);
        return dispatch({ type: GET_SUCCESS_CARS_BIKES, payload: data })
    }
    catch (err) {
    console.log(err);
    dispatch({ type: FAILURE_CARS_BIKES })
}
}

//  export const getSearchedData = (searchValue,page,limit) => async (dispatch) => {
//     try {
//         let res = await axios.get(`http://localhost:5000/carbikedata/${search}?page=${page}&limit=${limit}`);
//         let data = await res.data;
//         console.log("searched", data);
//         dispatch({ type: GET_SUCCESS_CARS_BIKES, payload: data })
//     }
//     catch (err) {
//         console.log(err);
//         dispatch({ type: FAILURE_CARS_BIKES })
//     }
// }

export const storeSearchValue = (searchValue) => (dispatch) => {
    dispatch({type:STORE_SEARCH_VALUE,payload:searchValue})
}