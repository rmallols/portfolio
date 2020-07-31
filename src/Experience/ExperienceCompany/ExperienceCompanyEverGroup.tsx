import React from 'react';
import ExperienceCompany from './ExperienceCompany';
import everGroupLogo from './logos/ever.svg';

export default function ExperienceCompanyEverGroup() {
    const company = 'Grupo Ever Group';
    return (
        <ExperienceCompany
            company={company}
            logo={<img src={everGroupLogo} alt={`${company} logo`} />}
            position="Frontend Developer"
            period="Dec 2005 - Sep 2006"
            stack="Javascript, ActionScript, HTML, CSS."
            details={
                <p>
                    Worked on multiple projects for the Spanish public
                    administration, including UI, UX, frontend business logic
                    and backend communication.
                </p>
            }
        />
    );
}
