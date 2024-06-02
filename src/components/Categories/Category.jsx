import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../../features/api/apiSlice';
import styles from './../../styles/Category.module.css';
import Products from '../Products/Products';

const Category = () => {
  const { id } = useParams();

  const defaultParams = {
    title: '',
    price_min: 0,
    price_max: 0,
    categoryID: id,
  };

  const [params, setParams] = useState(defaultParams);

  useEffect(() => {
    if (!id) return;

    setParams({ ...defaultParams, categoryID: id });
  }, [id]);

  const { data, isLoading, isSuccess } = useGetProductsQuery({ categoryID: id });

  return (
    <section className={styles.wrapper}>
      <h2>Showwes</h2>

      <form className={styles.filters} onSubmit={() => {}}>
        <div className={styles.filter}>
          <input
            type="text"
            name="title"
            onChange={() => {}}
            placeholder="Product Name"
            value={params.title}
          />
        </div>

        <div className={styles.filter}>
          <input
            type="number"
            name="price_min"
            onChange={() => {}}
            placeholder="0"
            value={params.price_min}
          />
        </div>

        <div className={styles.filter}>
          <input
            type="number"
            name="price_max"
            onChange={() => {}}
            placeholder="0"
            value={params.price_max}
          />
        </div>
        <buttont type="submit" hidden />
      </form>
      {isLoading ? (
        <div className="preloader">Loading...</div>
      ) : !isSuccess || !data.length ? (
        <div className={styles.back}>
          <span>No Results</span>
          <button>Reset</button>
        </div>
      ) : (
        <Products title="" products={data} amount={data.length} style={{ padding: 0 }} />
      )}
    </section>
  );
};

export default Category;
