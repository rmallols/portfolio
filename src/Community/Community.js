import React from 'react';
import CommunityMeetupLogo from './Community-meetup.svg';

export default function Community() {

    const videoIds = ['TPNOrSAb8Wk', 'rQlMdTFl94s', 'HOvSeHChpUM', '3uASZ_K_BRs'];

    return (
        <div className="content">
            <div>
                <p>
                    I love to connect with other coding enthusiasts!
                    I try to attent as many tech events as possible, and
                </p>
                <p>
                    I host one of the largest coding Groups in the UK;
                    we've celebrated 100+ free events to date in collaboration
                    with some of top tech companies and speakers.
                </p>
                <p>
                    We also run a YouTube channel with hundreds of free
                    video tutorials about coding.
                </p>
                <img src={CommunityMeetupLogo} />
            </div>
            <div className="videos">{
                videoIds.map(videoId => (
                    <div key={videoId} className="videoWrapper">
                        <iframe src={`https://www.youtube.com/embed/${videoId}`} />
                    </div>
                ))
            }
            </div>
        </div>
    );
}