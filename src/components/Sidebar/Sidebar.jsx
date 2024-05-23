import sidebarStyles from "../../styles/Sidebar.module.css";
import {NavLink} from "react-router-dom";


function Sidebar() {
    return(
        <section className={sidebarStyles.sidebar}>
            <div className={sidebarStyles.title}>CATEGORIES</div>
            <nav>
            <ul className={sidebarStyles.menu}>
                <li>
                    <NavLink to={`/categories/${1}`}>Link</NavLink>
                </li>
            </ul>
            </nav>

            <div className={sidebarStyles.footer}>
                <a className={sidebarStyles.link} href='https://google.com' target='_blank'>Help</a>
                <a className={sidebarStyles.link} href='https://google.com' target='_blank'>Terms & Conditions</a>
            </div>
        </section>
    )
}

export default Sidebar;