'use client';

import { useContext } from "react";
import BurgerMenuBtn from "./burger-menu-btn";
import { burgerMenuContext } from "./burger-menu-provider";

function BurgerMenu({ defaultClass, btnClass, children }) {
    const { menuClosed } = useContext(burgerMenuContext);

    return (
        <ul className={`${defaultClass} ${menuClosed ? 'closed' : 'open'}`}>
            <BurgerMenuBtn defaultClass={`${btnClass} ${btnClass}--inside`} />
            {children}
        </ul>
    );
}

export default BurgerMenu;