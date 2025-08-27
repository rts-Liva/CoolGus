import Link from "next/link";
import NavLink from "./nav-link";
import '@/scss/components/header.scss';

function Header() {
    return (
        <header className="header">
            <Link href='/'><img src='./coolgus-logo.png' alt="CoolGus logo" className="header__logo" /></Link>
            <nav>
                <ul className="header__list">
                    <li><NavLink defaultClass='header__list-item' path='/'>Hjem</NavLink></li>
                    <li><NavLink defaultClass='header__list-item' path='/galleri'>Galleri</NavLink></li>
                    <li><NavLink defaultClass='header__list-item' path='/events'>Events</NavLink></li>
                    <li><NavLink defaultClass='header__list-item' path='/dashboard'>Dashboard</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;