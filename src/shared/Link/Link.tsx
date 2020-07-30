import React from 'react';
import { Link as ReactLink } from 'react-router-dom';

export default function Link({
    to,
    text,
    isExternal,
    className,
    dataTestid,
    onClick,
}: LinkProps) {
    const onLinkClicked = (e: React.MouseEvent) => onClick && onClick(e);
    const baseArgs = {
        className,
        onClick: onLinkClicked,
        'data-testid': dataTestid,
    };

    return isExternal ? (
        <a {...baseArgs} href={to} target="_blank" rel="noopener noreferrer">
            {text}
        </a>
    ) : (
        <ReactLink {...baseArgs} to={to}>
            {text}
        </ReactLink>
    );
}

export interface LinkProps {
    to: string;
    text: string;
    isExternal: boolean;
    className?: string;
    dataTestid?: string;
    onClick?: (event: React.MouseEvent) => void;
}
