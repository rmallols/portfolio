import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderLogo() {
    return (
        <Link to="/" className="HeaderLogo" data-testid="HeaderLogo">
            <label className="firstName">Richard</label>
            <label className="lastName">Mallols</label>
        </Link>
    );
}
