import React from 'react';
import ExperienceCompany from './ExperienceCompany';
import pallucLogo from './logos/palluc.svg';

export default function ExperienceCompanyPalluc() {
    const company = 'Grupo Palluc';
    return (
        <ExperienceCompany
            company={company}
            logo={<img src={pallucLogo} alt={`${company} logo`} />}
            position="Frontend Developer"
            period="Sep 2006 - Oct 2009"
            stack="Javascript, jQuery, HTML, CSS, Liferay Portal, Joomla Portal, Alfresco ECM."
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
