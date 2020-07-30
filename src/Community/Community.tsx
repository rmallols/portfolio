import React from 'react';

export default function Community() {
    const videoIds = [
        'TPNOrSAb8Wk',
        'rQlMdTFl94s',
        'HOvSeHChpUM',
        '3uASZ_K_BRs',
    ];

    return (
        <div className="content">
            <div className="videos">
                {videoIds.map((videoId, index) => (
                    <div key={videoId} className="videoWrapper">
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title={`Youtube talk #${index + 1}`}
                        />
                    </div>
                ))}
            </div>
            <div className="text is-text" data-testid="Community-text">
                <p>
                    I love to connect with other coding enthusiasts! I'm a
                    developer advocate who is always trying to learn from his
                    environment while helping others with their coding skills,
                    with a special focus on helping underprivileged and
                    underrepresented groups with their programming skills.
                </p>
                <p>
                    I'm the organiser of{' '}
                    <a href="https://www.meetup.com/kodiri">Kodiri</a>, one of
                    the largest tech groups in the UK with ~8K members. At
                    Kodiri with play with coding related topics, we've
                    celebrated 100+ free events to date in collaboration with
                    some of top tech companies and speakers.
                </p>
                <p>
                    I also run a small{' '}
                    <a href="https://www.youtube.com/kodiri">YouTube channel</a>
                    &nbsp; with hundreds of free video tutorials about coding,
                    live recorded to ensuring that the learning experience
                    remains natural by e.g. dealing with unexpected problems.
                </p>
                <p>
                    Through my career, I've participated in many coding
                    conferences -both as a speaker and listener- and I've
                    organised different Book Clubs about coding in different
                    European countries.
                </p>
            </div>
        </div>
    );
}
