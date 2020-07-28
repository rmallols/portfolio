import React from 'react';

export default function HeaderMenuNav(
    { isOpen, onClick }: HeaderMenuNavProps
) {
  return (
    <div
      className={`HeaderMenuNav ${isOpen ? 'is-open' : ''}`}
      onClick={e => onClick(e)}
    >
      <span />
      <span />
      <span />
    </div>
  );
}

interface HeaderMenuNavProps {
    isOpen: boolean;
    onClick: Function;
}
