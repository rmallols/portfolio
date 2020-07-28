import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderLogo() {
    return (
        <Link to="/" className="HeaderLogo">
            <label className="firstName">Ricardo</label>
            <label className="lastName">Mallols</label>
        </Link>
    );
}