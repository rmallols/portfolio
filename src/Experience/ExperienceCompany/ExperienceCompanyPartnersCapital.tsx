import React from 'react';
import ExperienceCompany from './ExperienceCompany';
import partnersCapitalLogo from './logos/partners-capital.svg';

export default function ExperienceCompanyPartnersCapital() {
    const company = 'Partners Capital';
    return (
        <ExperienceCompany
            company={company}
            logo={<img src={partnersCapitalLogo} alt={`${company} logo`} />}
            position="Senior Software Developer"
            period="Oct 2020 - current"
            stack="HTML5, CSS3, JavaScript/ES6+, TypeScript, React, Redux, Jest, Cypress, Jenkins."
            details={
                <>
                    <p>
                        Built the Portfolio & Risk Management System, 
                        implementing new functionalities and improving 
                        the overall performance of the platform.
                    </p>
                </>
            }
            achievements={
                <p>
                    Reduced loading times on development platforms 
                    by 90%+ (From ~45s to ~4s).
                    <br />
                    Introduced regular workshops about JavaScript 
                    architecture and best coding practises.
                </p>
            }
        />
    );
}
