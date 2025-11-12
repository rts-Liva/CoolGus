import Link from "next/link";
import BurgerMenuProvider from "./burger-menu/burger-menu-provider";
import BurgerMenuBtn from "./burger-menu/burger-menu-btn";
import BurgerMenu from "./burger-menu/burger-menu";
import NavLink from "./nav-link";
import '@/scss/components/header.scss';

function Header() {
    return (
        <header className="header">
            <Link href='/'><img src='./coolgus-logo.png' alt="CoolGus logo" className="header__logo" /></Link>
            <nav>
                <BurgerMenuProvider>
                    <BurgerMenuBtn defaultClass="header__menu-btn" />
                    <BurgerMenu defaultClass="header__menu" btnClass="header__menu-btn">
                        <li><NavLink defaultClass='header__menu-item' path='/'>Hjem</NavLink></li>
                        <li><NavLink defaultClass='header__menu-item' path='/galleri'>Galleri</NavLink></li>
                        <li><NavLink defaultClass='header__menu-item' path='/events'>Events</NavLink></li>
                        <li><NavLink defaultClass='header__menu-item' path='/dashboard'>Dashboard</NavLink></li>
                    </BurgerMenu>
                </BurgerMenuProvider>
            </nav>
        </header>
    );
}

export default Header;