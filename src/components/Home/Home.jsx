import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import {useDispatch, useSelector} from "react-redux";
import Categories from "../Categories/Categories";
import Banner from "../Banner/Banner";
import {useEffect} from "react";
import {filterByPrice} from "../../features/products/ProductsSlice";

function Home() {
    const dispatch = useDispatch();
    const { products:{ list, filtered }, categories } = useSelector((state) => state);

    useEffect(()=>{
        if(!list.length > 0) return;

        dispatch(filterByPrice(100))
    },[dispatch, list.length])

    return(
        <>
        <Poster/>
            <Products products={list} amount={5} title="Trending"/>
            <Categories products={categories.list} amount={5} title="Worth seeing"/>
            <Banner />
            <Products products={filtered} amount={5} title="Less than 100$"/>
        </>
    )
}
export default Home;