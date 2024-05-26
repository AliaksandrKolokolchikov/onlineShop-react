import categoriesStyles from '../../styles/Categories.module.css';
import {Link} from "react-router-dom";

function categories({ title , products = [], amount }) {
        const list = products.filter((_, i) => i < amount);
    return (
            <section className={categoriesStyles.section}>
                <h2 >{title}</h2>
                <div className={categoriesStyles.list}>
                    {list.map(({id, name, image }) => (
                        <Link className={categoriesStyles.item} to={`/categories/${id}`} key={id} >
                            <div className={categoriesStyles.image} style={{backgroundImage: `url(${image})`}} />
                            <h3 className={categoriesStyles.title}>{name}</h3>
                        </Link>
                    ))}
                </div>
            </section>
    )
}
export default categories;