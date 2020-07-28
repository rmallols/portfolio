import React from 'react';

export default function HeaderMenuNav({ isOpen, onClick }: HeaderMenuNavProps) {
    return (
        <div
            role="button"
            tabIndex={0}
            className={`HeaderMenuNav ${isOpen ? 'is-open' : ''}`}
            onClick={onClick}
            onKeyDown={onClick}
        >
            <span />
            <span />
            <span />
        </div>
    );
}

interface HeaderMenuNavProps {
    isOpen: boolean;
    onClick: (event: React.MouseEvent | React.KeyboardEvent) => void;
}
