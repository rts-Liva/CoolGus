'use client';

import { useContext } from "react";
import { burgerMenuContext } from "./burger-menu-provider";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

function BurgerMenuBtn({ defaultClass }) {
    const { menuClosed, setMenuClosed } = useContext(burgerMenuContext);

    function toggleMenuState() {
        setMenuClosed(!menuClosed);
    };

    return (
        <button
            type="button"
            className={`${defaultClass} ${menuClosed ? 'closed' : 'open'}`}
            onClick={toggleMenuState}
        >{menuClosed ? <FiMenu /> : <IoClose />}
        </button>
    );
}

export default BurgerMenuBtn;