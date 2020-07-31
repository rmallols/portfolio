import React from 'react';
import ExperienceCompany from './ExperienceCompany';

export default function ExperienceCompanyVTT() {
    return (
        <ExperienceCompany
            company="VTT"
            logo="logo_vtt"
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
