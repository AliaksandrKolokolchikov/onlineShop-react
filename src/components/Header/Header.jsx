import headerStyle from './../../styles/Header.module.css';
import {Link, useNavigate} from "react-router-dom";
import {ROUTES} from "../../utils/Routes";

import headerLogo from "../../images/logo.svg";
import headerAvatar from '../../images/avatar.jpg'
import {useDispatch, useSelector} from "react-redux";
import {toggleForm} from "../../features/user/userSlice";
import {useEffect, useState} from "react";


function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentUser } = useSelector(({user}) => user);
    const [values, setValues] = useState({name:'Guest', avatar:headerAvatar})

    useEffect(() => {
        if(!currentUser) return;
        setValues(currentUser)
    }, [currentUser]);
    const handleClick = () => {
        if(!currentUser) dispatch(toggleForm(true))
        else navigate(ROUTES.PROFILE)
    }
    return (
        <div className={headerStyle.header}>
            <div className={headerStyle.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={headerLogo} alt="Stuff"/>
                </Link>
            </div>
            <div className={headerStyle.info}>
                <div className={headerStyle.user} onClick={handleClick}>
                    <div className={headerStyle.avatar}
                         style={{ backgroundImage:`url(${values.avatar})` }} />
                    <div className={headerStyle.username}>{values.name}</div>
                </div>
                <form className={headerStyle.form}>
                    <div className={headerStyle.icon}>
                        <svg className='icon'>
                             <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
                            </svg>
                    </div>
                    <div className={headerStyle.input}>
                            <input type='#search'
                                   name='search'
                                   placeholder={'Search...'}
                                   autoComplete='off'
                                   onChange={()=>{}}
                                   value=""/>
                    </div>
                    {/*<div className={headerStyle.box}></div>*/}
                </form>
                <div className={headerStyle.account}>
                    <Link to={ROUTES.HOME} className={headerStyle.favourites}   >
                        <svg className={headerStyle['icon-fav']}>
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
                        </svg>
                    </Link>
                    <Link to={ROUTES.CART} className={headerStyle.cart} >
                        <svg className={headerStyle['icon-cart']}>
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
                        </svg>
                        <span className={headerStyle.count}>2</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;