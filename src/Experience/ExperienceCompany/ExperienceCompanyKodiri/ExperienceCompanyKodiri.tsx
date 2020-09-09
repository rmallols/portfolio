import React from 'react';
import ExperienceCompany from '../ExperienceCompany';
import ExperienceCompanyKodiriLogo from './ExperienceCompanyKodiriLogo/ExperienceCompanyKodiriLogo';

export default function ExperienceCompanyKodiri() {
    return (
        <ExperienceCompany
            company="Kodiri"
            logo={<ExperienceCompanyKodiriLogo />}
            position="Senior Software Developer"
            period="Apr 2018 - current"
            stack="HTML5, CSS3, Less, JavaScript/ES6+, TypeScript, React, NodeJs, Express, MongoDB, AWS, CircleCI."
            details={
                <>
                    <p>
                        Created{' '}
                        <a
                            href="https://www.kodiri.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Kodiri
                        </a>
                        , an online coding platform to help developers improve
                        their tech skills by playing against each other, with a
                        special focus on underprivileged and underrepresented
                        communities.
                    </p>
                    <p>
                        Helped 100+ people without coding experience to break
                        into tech, including companies like Google or Sky
                        TV.Implemented apps for{' '}
                        <a
                            href="https://apps.apple.com/us/app/kodiri-all-you-need-is-code/id1497757436"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            iOS
                        </a>{' '}
                        and{' '}
                        <a
                            href="https://play.google.com/store/apps/details?id=com.kodiri"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Android
                        </a>
                        , running under the same core(avg.score: 5.0).
                    </p>
                    <p>
                        Celebrated 100+ free coding events for the coding
                        community, including 2 International JavaScript
                        Challenges between the UK, France, Spain and Russia.
                    </p>
                </>
            }
            achievements={
                <p>
                    Became the most active code learning platform built in
                    Europe.
                    <br />
                    Celebrated the largest{' '}
                    <a
                        href="https://www.youtube.com/watch?v=rQlMdTFl94s"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        coding event
                    </a>{' '}
                    in the UK on the Meetup platform (2019).
                </p>
            }
        />
    );
}
