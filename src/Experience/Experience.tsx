import React from 'react';
import experienceList, { Experience as IExperience } from './experienceList';

export default function Experience() {
    return (
        <div className="companiesWrapper">
            {experienceList.map((experience: IExperience) => (
                <div key={experience.company}>
                    <ExperienceCompany experience={experience} />
                </div>
            ))}
        </div>
    );
}

// @ts-ignore: TODO: IntrinsicAttributes
function ExperienceCompany({ experience }) {
    return (
        <div className="ExperienceCompany">
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
                        <div className="is-color-cyan">Company</div>
                        <h6>{experience.company}</h6>
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
