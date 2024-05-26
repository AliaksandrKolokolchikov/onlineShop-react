import productsStyles from "../../styles/Products.module.css";
import {Link} from "react-router-dom";

function Products( {title, style={}, products = [] , amount} ) {
    const list = products.filter ((_, i) => i < amount);
    return (
        <section className={productsStyles.products} style={style}>
            {title && <h2>{title}</h2>}
            <div className={productsStyles.list}>
                {list.map(({id, images, title, category: {name: cat },price}) => (
                    <Link className={productsStyles.product} to={`/products/${id}`} key={id}>
                        <div className={productsStyles.image} style={{backgroundImage: `url(${images[0]})`}} />
                        <div className={productsStyles.wrapper}>
                                <h3 className={productsStyles.title}>{title}</h3>
                            <div className={productsStyles.cat}>{cat}</div>
                            <div className={productsStyles.info}>
                                <div className={productsStyles.prices}>
                                    <div className={productsStyles.price}>{price}</div>
                                    <div className={productsStyles.oldPrice}>{Math.floor(price * 0.8)}$</div>
                                </div>
                                <div className={productsStyles.purchases}>
                                    {Math.floor(Math.random()*20 + 1)} purchases
                                </div>
                            </div>

                        </div>

                    </Link>
                ))}
            </div>
        </section>
    )
}
export default Products