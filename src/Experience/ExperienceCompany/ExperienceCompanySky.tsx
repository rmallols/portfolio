import React from 'react';
import ExperienceCompany from './ExperienceCompany';
import skyLogo from './logos/sky.svg';

export default function ExperienceCompanySky() {
    const company = 'Sky TV';
    return (
        <ExperienceCompany
            company={company}
            logo={<img src={skyLogo} alt={`${company} logo`} />}
            position="Senior Software Developer"
            period="May 2014 - Feb 2016"
            stack="Javascript, Angular, React, jQuery, HTML5, CSS3, SASS, NodeJs, Express, Groovy, Jasmine, Karma, Sinon, Grunt, Bower, Jenkins."
            details={
                <>
                    <p>
                        Worked on the{' '}
                        <a
                            href="https://www.nowtv.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            NOW TV
                        </a>{' '}
                        platform, the leading VOD system in the UK, with
                        1.000.000+ active customers. Worked on an extreme Agile
                        team, pairing with other devs full-time.
                    </p>
                    <p>
                        Defined their next-gen architecture and further
                        development to ensure the stability and scalability of
                        the product long term. Selected to drive technical hubs
                        about AngularJs to level up and synchronize the
                        development patterns with this framework across the
                        company.
                    </p>
                </>
            }
            achievements={
                <p>
                    Received 2 “Believe in Better” awards.
                    <br />
                    <a
                        href="https://www.youtube.com/watch?v=TPNOrSAb8Wk"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Presented the new open source components
                    </a>{' '}
                    at a Google-backed international JavaScript conference.
                </p>
            }
        />
    );
}
