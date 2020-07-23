import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Menu() {

    const links = [
        { path: '/', text: 'Home' },
        { path: '/about-me', text: 'About me' },
        { path: '/skills', text: 'Skills' },
        { path: '/experience', text: 'Experience' },
        { path: '/community', text: 'Community' },
        { path: '/contact', text: 'Contact' }
    ];

    return (
        <div className="Menu">{
            links.map(({ path, text }) => (
                <MenuLink key={path} path={path} text={text} />
            ))
        }</div>
    );
}

function MenuLink({ path, text }) {

    const location = useLocation();
    const isActive = () => path === location.pathname;

    return (
        <Link
            to={path}
            className={isActive() ? 'is-active' : ''}
        >
            <h6>{text}</h6>
        </Link>
    );
}