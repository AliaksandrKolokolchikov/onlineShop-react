import posterStyles from "../../styles/Home.module.css";
import posterBackground from "../../images/computer.png";

function Poster() {
    return(
        <section className={posterStyles.home}>
            <div className={posterStyles.title}>BIG SALE 20%</div>
            <div className={posterStyles.product}>
                <div className={posterStyles}>
                    <div className={posterStyles.subtitle}>the bestseller of 2024 </div>
                    <h1 className={posterStyles.head}>LENNON r2d2
                        with NVIDIA 5090 TI</h1>
                    <button className={posterStyles}>Shop Now</button>
                </div>
                <div className={posterStyles.image}>
                    <img src={posterBackground} alt="posterBackground"/>
                </div>
            </div>
        </section>
    )
}

export default Poster;