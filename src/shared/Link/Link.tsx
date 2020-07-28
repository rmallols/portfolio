import React from 'react';
import { Link as ReactLink } from 'react-router-dom';

export default function Link({
    to,
    text,
    isExternal,
    className,
    onClick,
}: LinkProps) {
    const onLinkClicked = (e: React.MouseEvent) => onClick && onClick(e);

    return isExternal ? (
        <a
            href={to}
            className={className}
            onClick={onLinkClicked}
            target="_blank"
            rel="noopener noreferrer"
        >
            {text}
        </a>
    ) : (
        <ReactLink to={to} className={className} onClick={onLinkClicked}>
            {text}
        </ReactLink>
    );
}

export interface LinkProps {
    to: string;
    text: string;
    isExternal: boolean;
    className?: string;
    onClick?: (event: React.MouseEvent) => void;
}
