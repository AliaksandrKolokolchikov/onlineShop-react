import {Route, Routes} from "react-router-dom";
import Home from "../Home/Home";
import {ROUTES} from "../../utils/Routes";
import SingleProduct from "../Products/SingleProduct";
import Profile from "../Profile/Profile";

function AppRoutes (){
    return(
        <Routes>
            <Route index element={<Home />}/>
            <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
            <Route path={ROUTES.PROFILE} element={<Profile />} />
        </Routes>
    )
}
export default AppRoutes;