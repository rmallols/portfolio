import React from 'react';

// @ts-ignore: TODO: IntrinsicAttributes

export default function ExperienceCompany({
    company,
    logo,
    position,
    period,
    stack,
    details,
}: ExperienceCompany) {
    return (
        <div className="ExperienceCompany" data-testid="ExperienceCompany">
            <div className="logoWrapper">
                {typeof logo === 'string' ? (
                    <i className={`logo ${logo}`} />
                ) : (
                    logo
                )}
            </div>
            <div className="details">
                <div className="position">
                    <div>
                        <div className="is-color-cyan">Company</div>
                        <h6 data-testid="ExperienceCompany-title">{company}</h6>
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

interface ExperienceCompany {
    company: string;
    logo: JSX.Element | string;
    position: string;
    period: string;
    stack: string;
    details: JSX.Element;
}
