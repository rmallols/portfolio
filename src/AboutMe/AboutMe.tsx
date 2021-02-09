import React from 'react';

export default function AboutMe() {
    return (
        <div className="is-text" data-testid="AboutMe">
            <p>
                I'm a{' '}
                <label className="is-color-pink">
                    Software Engineer with 18 years of programming experience.
                </label>
                &nbsp; I’m a highly proficient Javascript / React / Angular
                developer, interested in standards, efficiency, automated
                testing and UI/UX.
            </p>
            <p>
                <label className="is-color-yellow">
                    I’m a very organized, responsible and committed person.
                </label>
                &nbsp; I consider communication, respect and teamwork as the
                keys to both personal and professional success.
            </p>
            <p>
                Technology enthusiast,&nbsp;
                <label className="is-color-yellow">
                    I aim to face new and motivating challenges
                </label>
                &nbsp; working as part of an Agile team, contributing with my
                knowledge and continuously learning from my environment.
            </p>
            <p>
                I have been working for multiple companies and customers in the
                UK, Germany, Switzerland and Spain. I’m focused on&nbsp;
                <label className="is-color-yellow">
                    supporting underprivileged and underrepresented communities
                </label>{' '}
                with their coding skills.
            </p>
            <p>
                I have a degree in&nbsp;
                <label className="is-color-yellow">Computer Science</label> by
                the Polytechnic University of Valencia, Spain (2002-2007, 5 year
                plan).
            </p>
        </div>
    );
}
