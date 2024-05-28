import {useNavigate, useParams} from "react-router-dom";
import {useGetProductQuery} from "../../features/api/apiSlice";
import {useEffect} from "react";
import {ROUTES} from "../../utils/Routes";
import Product from "./Product";
import Products from "./Products";


const  SingleProduct =()=> {
    const { id} = useParams()
    const navigate = useNavigate();

    const { data, isLoading, isFetching, isSuccess}  = useGetProductQuery({id})

    useEffect(() => {
        if(!isFetching && !isLoading && !isSuccess){
            navigate(ROUTES.HOME)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading, isFetching, isSuccess]);

    return (
        !data ? (
            <section className={'preloader'}>
                Loading products...
            </section>
        ):(
            <>
                <Product{...data}/>
                <Products products={list} amount={5} title='trending' />
            </>
        )
    )
}
export default SingleProduct;