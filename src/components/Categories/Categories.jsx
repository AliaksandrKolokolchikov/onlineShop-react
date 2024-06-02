import categoriesStyles from '../../styles/Categories.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Categories = ({ title, products = [], amount }) => {
  const list = products.filter((_, i) => i < amount);
  return (
    <section className={categoriesStyles.section}>
      <h2>{title}</h2>
      <div className={categoriesStyles.list}>
        {list.map(({ id, name, image }) => (
          <Link
            data-testid={`Link-${id}`}
            className={categoriesStyles.item}
            to={`/categories/${id}`}
            key={id}
          >
            <div className={categoriesStyles.image} style={{ backgroundImage: `url(${image})` }} />
            <h3 className={categoriesStyles.title}>{name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

Categories.propTypes = {
  title: PropTypes.string,
  products: PropTypes.array,
  amount: PropTypes.number,
};

export default Categories;
