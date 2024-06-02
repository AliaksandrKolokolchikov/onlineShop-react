import bannerStyles from '../../styles/Home.module.css';

import bannerImg from '../../images/banner.png';

function Banner() {
  return (
    <section className={bannerStyles.banner}>
      <div className={bannerStyles.left}>
        <p className={bannerStyles.content}>
          NEW YEAR
          <span>SALE</span>
        </p>
        <button className={bannerStyles.more}>See more</button>
      </div>
      <div className={bannerStyles.right} style={{ backgroundImage: `url(${bannerImg})` }}>
        <p className={bannerStyles.discount}>
          save up to <span>50%</span>off
        </p>
      </div>
    </section>
  );
}
export default Banner;
