import React from 'react';
import ExperienceCompany from './ExperienceCompany';
import flowableLogo from './logos/flowable.svg';

export default function ExperienceCompanyFlowable() {
    const company = 'Flowable AG';
    return (
        <ExperienceCompany
            company={company}
            logo={<img src={flowableLogo} alt={`${company} logo`} />}
            position="Frontend Developer"
            period="Oct 2011 - May 2014"
            stack="Javascript, AngularJS, jQuery, HTML5, CSS3, Less, Jasmine, Karma, GruntJs, TeamCity."
            details={
                <>
                    <p>
                        Worked on the architecture & further development of{' '}
                        <a
                            href="https://flowable.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Flowable
                        </a>
                        , a BPM solution for the Swiss and German financial,
                        pharmaceutical and insurance industries.
                    </p>
                    <p>
                        Created predictable interfaces for non-technical users,
                        based on intuitive events such as drag&drop, resizing,
                        multi-file uploading, etc.
                    </p>
                    <p>
                        Played with scrum-master related duties, by managing
                        backlogs on JIRA, reviewing card estimations or handling
                        retrospective sessions.
                    </p>
                </>
            }
        />
    );
}
