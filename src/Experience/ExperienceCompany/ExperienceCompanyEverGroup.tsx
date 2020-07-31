import React from 'react';
import ExperienceCompany from './ExperienceCompany';
import everGroupLogo from './logos/ever.svg';

export default function ExperienceCompanyEverGroup() {
    return (
        <ExperienceCompany
            company="Grupo Ever Group"
            logo={<img src={everGroupLogo} />}
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
