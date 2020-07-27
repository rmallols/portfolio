import React from 'react';

export default function HeaderMenuNav({ isOpen, onClick }) {
    return (
        <div
            className={`HeaderMenuNav ${isOpen ? 'is-open' : ''}`}
            onClick={onClick}>
            <span />
            <span />
            <span />
        </div>
    );
}