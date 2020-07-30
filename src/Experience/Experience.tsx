import React from 'react';
import experienceList, { Experience as IExperience } from './experienceList';

export default function Experience() {
    return (
        <div className="companiesWrapper">
            {experienceList.map((experience: IExperience, index: number) => (
                <ExperienceCompany
                    experience={experience}
                    index={index}
                    key={experience.company}
                />
            ))}
        </div>
    );
}

// @ts-ignore: TODO: IntrinsicAttributes
function ExperienceCompany({ experience, index }) {
    return (
        <div
            className="ExperienceCompany"
            data-testid={`ExperienceCompany-${index}`}
        >
            <div className="logoWrapper">
                {typeof experience.logo === 'string' ? (
                    <i className={`logo ${experience.logo}`} />
                ) : (
                    experience.logo
                )}
            </div>
            <div className="details">
                <div className="position">
                    <div>
                        <div className="is-color-cyan">
                            Company
                        </div>
                        <h6 data-testid="ExperienceCompany-title">
                            {experience.company}
                        </h6>
                    </div>
                    <div>
                        <div className="is-color-cyan">Position</div>
                        <h6>{experience.position}</h6>
                    </div>
                    <div>
                        <div className="is-color-cyan">Period</div>
                        <h6>{experience.period}</h6>
                    </div>
                </div>
                <div>
                    <div className="is-color-cyan">Stack</div>
                    <div>{experience.stack}</div>
                </div>
                <div>
                    <div className="is-color-cyan">Details</div>
                    {experience.details.map((paragraph: string) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}
