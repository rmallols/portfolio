import React from 'react';
import { Link as ReactLink } from 'react-router-dom';

export default function Link({ to, text, className, isExternal }) {
    return isExternal ?
        <a
            href={to}
            className={className}
            target="_blank"
            rel="noopener noreferrer">
            {text}
        </a> :
        <ReactLink to={to} className={className}>{text}</ReactLink>
}