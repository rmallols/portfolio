import React from 'react';

export default function SocialMediaLinks() {

    const links = [
        { id: 'meetup', text: 'Meetup', link: 'https://www.meetup.com/kodiri' },
        { id: 'youtube', text: 'YouTube', link: 'https://www.youtube.com/kodiri' },
        { id: 'github', text: 'GitHub', link: 'https://www.github.com/rmallols' }
    ];

    return (
        <div className="SocialMediaLinks">{
            links.map(({ id, text, link }) => (
                <a
                    key={id}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`is-${id}`}
                >
                    {text}
                </a>
            ))
        }</div>
    );
}