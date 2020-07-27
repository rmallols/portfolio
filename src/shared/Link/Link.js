import React from 'react';
import { Link as ReactLink } from 'react-router-dom';

export default function Link({ to, text, className, isExternal, onClick }) {
    return isExternal ?
        <a
            href={to}
            className={className}
            onClick={onClick}
            target="_blank"
            rel="noopener noreferrer">
            {text}
        </a> :
        <ReactLink to={to} className={className} onClick={onClick}>
            {text}
        </ReactLink>
}