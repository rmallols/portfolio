import React from 'react';
import Link from '../Link/Link';

export default function Footer({ to, text, isExternal }) {
    return (
        <footer className="is-text-center">
            <Link
                to={to}
                text={text}
                isExternal={isExternal}
                className={[
                    'button',
                    'animate__animated',
                    'animate__lightSpeedInLeft',
                    'animate__delay-1s'
                ].join(' ')}
            />
        </footer>
    );
}