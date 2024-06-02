import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { filterByPrice } from '../../features/products/ProductsSlice';

import Products from '../Products/Products';
import Poster from '../Poster/Poster';
import Categories from '../Categories/Categories';
import Banner from '../Banner/Banner';

function Home() {
  const dispatch = useDispatch();
  const {
    products: { list, filtered },
    categories,
  } = useSelector((state) => state);

  useEffect(() => {
    if (!list.length > 0) return;

    dispatch(filterByPrice(100));
  }, [dispatch, list.length]);

  return (
    <>
      <Poster />
      <Products products={list} amount={5} title="Trending" />
      <Categories products={categories.list} amount={5} title="Worth seeing" />
      <Banner />
      <Products products={filtered} amount={5} title="Less than 100$" />
    </>
  );
}
export default Home;
