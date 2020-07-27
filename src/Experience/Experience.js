import React from 'react';
import experienceList from './experience-list';

export default function Experience() {
    return (
        <div className="companiesWrapper">{
            experienceList.map(experience => (
                <ExperienceCompany
                    {...experience}
                    key={experience.company}
                    details={
                        <>{
                            experience.details
                                .map((paragraph, index) => (
                                    <p key={index}>
                                        {paragraph}
                                    </p>
                                ))
                        }</>
                    }
                />
            ))
        }</div>
    );
}

function ExperienceCompany({
    company, logo, position, period, stack, details
}) {
    return (
        <div className="ExperienceCompany">
            <div>{
                typeof logo === 'string' ?
                    <i className={`logo ${logo}`} /> :
                    logo
            }</div>
            <div className="details">
                <div className="position">
                    <div>
                        <div className="is-color-cyan">Company</div>
                        <h6>{company}</h6>
                    </div>
                    <div>
                        <div className="is-color-cyan">Position</div>
                        <h6>{position}</h6>
                    </div>
                    <div>
                        <div className="is-color-cyan">Period</div>
                        <h6>{period}</h6>
                    </div>
                </div>
                <div>
                    <div className="is-color-cyan">Stack</div>
                    <div>{stack}</div>
                </div>
                <div>
                    <div className="is-color-cyan">Details</div>
                    {details}
                </div>
            </div>
        </div>
    );
}