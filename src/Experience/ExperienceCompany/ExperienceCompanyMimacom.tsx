import React from 'react';
import ExperienceCompany from './ExperienceCompany';
import mimacomLogo from './logos/mimacom.svg';

export default function ExperienceCompanyMimacom() {
    const company = 'Mimacom AG';
    return (
        <ExperienceCompany
            company={company}
            logo={<img src={mimacomLogo} alt={`${company} logo`} />}
            position="Frontend Developer"
            period="Oct 2009 - Oct 2011"
            stack="Javascript, jQuery, WebScript, HTML, CSS, Liferay Portal, Alfresco ECM."
            details={
                <>
                    <p>
                        Worked as part of Agile teams on multiple projects for
                        both private organizations and the public administration
                        across different European countries (mainly Germany,
                        Spain and Switzerland).
                    </p>
                    <p>
                        Looked after the UI and UX for most of those projects
                        (wireframes + designs + implementation), as well as
                        several customer-facing duties.
                    </p>
                </>
            }
        />
    );
}
