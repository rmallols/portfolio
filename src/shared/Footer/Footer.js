import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer({ text, path }) {
    return (
        <footer className="is-text-center">
            <Link
                to={path}
                className={[
                    'button',
                    'animate__animated',
                    'animate__lightSpeedInLeft',
                    'animate__delay-1s'
                ].join(' ')}>
                {text}
            </Link>
        </footer>
    );
}