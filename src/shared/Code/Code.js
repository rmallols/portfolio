import React from 'react';
import Prism from 'prismjs';
import './code-dracula.css';

export default function Code({ code }) {

    const getFormattedCode = () => (
        Prism.highlight(code, Prism.languages.javascript, 'javascript')
    );

    return (
        <div
            className="Code"
            dangerouslySetInnerHTML={{ __html: getFormattedCode() }}
        />
    );
}