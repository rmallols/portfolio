import React from 'react';
import SkillsChart from './SkillsChart/SkillsChart';
import SkillsText from './SkillsText/SkillsText';
import Footer from '../shared/Footer/Footer';

export default function Skills() {
    return (
        <div className="Skills">
            <main>
                <SkillsChart />
                <SkillsText />
            </main>
            <Footer text="Experience" path="experience" />
        </div>
    );
}