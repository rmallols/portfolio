import React from 'react';
import ExperienceCompanyPartnersCapital from './ExperienceCompany/ExperienceCompanyPartnersCapital';
import ExperienceCompanyKodiri from './ExperienceCompany/ExperienceCompanyKodiri/ExperienceCompanyKodiri';
import ExperienceCompanyHSBC from './ExperienceCompany/ExperienceCompanyHSBC';
import ExperienceCompanySky from './ExperienceCompany/ExperienceCompanySky';
import ExperienceCompanyFlowable from './ExperienceCompany/ExperienceCompanyFlowable';
import ExperienceCompanyMimacom from './ExperienceCompany/ExperienceCompanyMimacom';
import ExperienceCompanyPalluc from './ExperienceCompany/ExperienceCompanyPalluc';
import ExperienceCompanyEverGroup from './ExperienceCompany/ExperienceCompanyEverGroup';
import ExperienceCompanyVTT from './ExperienceCompany/ExperienceCompanyVTT';

export default function Experience() {
    return (
        <div className="companiesWrapper">
            <ExperienceCompanyPartnersCapital />
            <ExperienceCompanyKodiri />
            <ExperienceCompanyHSBC />
            <ExperienceCompanySky />
            <ExperienceCompanyFlowable />
            <ExperienceCompanyMimacom />
            <ExperienceCompanyPalluc />
            <ExperienceCompanyEverGroup />
            <ExperienceCompanyVTT />
        </div>
    );
}
