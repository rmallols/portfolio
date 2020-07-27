import React from 'react';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderMenu from './HeaderMenu/HeaderMenu';

export default function Header() {
    return (
        <header className="Header">
            <HeaderLogo />
            <HeaderMenu />
        </header>
    )
}