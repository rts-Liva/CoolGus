'use client';

import { createContext, useState } from "react";

export const burgerMenuContext = createContext(null);

function BurgerMenuProvider({ children }) {
    const [menuClosed, setMenuClosed] = useState(true);

    return (
        <burgerMenuContext.Provider value={{ menuClosed, setMenuClosed }}>
            {children}
        </burgerMenuContext.Provider>
    );
}

export default BurgerMenuProvider;