import React from 'react';
import ExperienceCompany from './ExperienceCompany';
import hsbcLogo from './logos/hsbc.svg';

export default function ExperienceCompanyHSBC() {
    const company = 'HSBC';
    return (
        <ExperienceCompany
            company={company}
            logo={<img src={hsbcLogo} alt={`${company} logo`} />}
            position="Senior Software Developer"
            period="Apr 2016 - Apr 2018"
            stack="Javascript/ES6+, Angular4, React, Vue2, TypeScript, Rx, Jasmine, Karma, Protractor."
            details={
                <>
                    <p>
                        Created the modular architecture and further development
                        for the new FX Trading Platform of the bank (mobile and desktop). 
                        Introduced modern development patterns with ES6+, offering other
                        Agile teams freedom to decide the best technology for
                        each scenario, based on their requirements (Angular4,
                        React, Vue2).
                    </p>
                    <p>
                        Developed a comprehensive testing infrastructure (unit +
                        functional + integration + visual regression) to ensure
                        the scalability of the product in the long term.
                    </p>
                </>
            }
            achievements={
                <p>
                    Ranked #3 most productive employees (top 0.3%) in 2017.
                    <br />
                    Improved performance of legacy trading apps by ~50% (loading
                    times, CPU & memory usage).
                </p>
            }
        />
    );
}
