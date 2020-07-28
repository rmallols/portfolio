import React from 'react';
import Link, { LinkProps } from '../Link/Link';

export default function Footer({ to, text, isExternal }: LinkProps) {
    return (
        <footer className="is-text-centered">
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