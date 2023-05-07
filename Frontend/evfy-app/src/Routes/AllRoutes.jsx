import {Routes,Route} from "react-router-dom"
import { Login } from "../Components/Login"
import { Signup } from "../Components/Signup"
import { ForgetPassword } from "../Components/ForgetPassword"
import { HomePage } from "../Components/HomePage"
import { CarsBikePage } from "../Components/CarsBikePage"
export const AllRoutes = ({searchValue}) => {
    return (
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/forget" element={<ForgetPassword/>} />
            <Route path="/" element={<HomePage/>} />
            <Route path="/carbikedata" element={<CarsBikePage searchValue={searchValue}/>} />
        </Routes>
    )
}