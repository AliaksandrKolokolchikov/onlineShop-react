import sidebarStyles from '../../styles/Sidebar.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Sidebar() {
  const { list } = useSelector(({ categories }) => categories);
  console.log('list', list);
  return (
    <section className={sidebarStyles.sidebar}>
      <div className={sidebarStyles.title}>CATEGORIES</div>
      <nav>
        <ul className={sidebarStyles.menu}>
          {list.map(({ id, name }) => (
            <li key={id}>
              <NavLink
                className={({ isActive }) =>
                  `${sidebarStyles.link} 
                             ${isActive ? sidebarStyles.active : ''}`
                }
                to={`/categories/${id}`}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className={sidebarStyles.footer}>
        <a
          className={sidebarStyles.link}
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
        >
          Help
        </a>
        <a
          className={sidebarStyles.link}
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
        >
          Terms & Conditions
        </a>
      </div>
    </section>
  );
}

export default Sidebar;
