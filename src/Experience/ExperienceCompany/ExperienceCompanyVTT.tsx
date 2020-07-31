import React from 'react';
import ExperienceCompany from './ExperienceCompany';
import vttLogo from './logos/vtt.svg';

export default function ExperienceCompanyVTT() {
    const company = 'VTT';
    return (
        <ExperienceCompany
            company={company}
            logo={<img src={vttLogo} alt={`${company} logo`} />}
            position="Founder"
            period="Mar 2002 - Dec 2005"
            stack="Javascript, HTML, CSS."
            details={
                <p>
                    Created websites for different small business and public
                    associations. Managed the project life-cycles end to end,
                    from analysis and design to implementation and testing.
                </p>
            }
        />
    );
}
