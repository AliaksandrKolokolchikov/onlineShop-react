import {useNavigate, useParams} from "react-router-dom";
import {useGetProductQuery} from "../../features/api/apiSlice";
import {useEffect} from "react";
import {ROUTES} from "../../utils/Routes";


function SingleProduct() {
    const { id} = useParams()
    const navigate = useNavigate();

    const {data , isLoading, isFetching, isSuccess}  = useGetProductQuery({id})

    useEffect(() => {
        if(!isFetching && !isLoading && !isSuccess){
            navigate(ROUTES.HOME)
        }
    }, [isLoading, isFetching, isSuccess, navigate]);

    return (
<div>singleProduct</div>
    )
}
export default SingleProduct;