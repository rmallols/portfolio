import React from 'react';
import { useLocation } from 'react-router-dom';
import routes from '../../Routes/routes-list';
import Link from '../../Link/Link';

export default function HeaderMenu() {

    return (
        <div className="HeaderMenu">{
            routes.map(route => (
                <MenuLink key={route.to} route={route} />
            ))
        }</div>
    );
}

function MenuLink({ route }) {

    const location = useLocation();
    const isActive = () => route.to === location.pathname;

    return <Link {...route} className={isActive() ? 'is-active' : ''} />;
}