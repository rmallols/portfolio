import React from 'react';
import ExperienceKodiriLogo from './ExperienceKodiriLogo/ExperienceKodiriLogo';

const experienceList = [{
    company: 'Kodiri',
    logo: <ExperienceKodiriLogo />,
    position: 'Founder',
    period: 'Apr 2018 - current',
    stack: 'HTML5, CSS3, LESS, JavaScript/ES6+, React, NodeJs, Express, MongoDB, AWS',
    details: ['foo', 'bar']
}, {
    company: 'HSBC',
    logo: 'logo_hsbc',
    position: 'Senior Software Developer',
    period: 'Apr 2016 - Apr 2018',
    stack: 'Javascript/ES6, Angular4, Typescript, Rx, ReactJS, Vue2, Chart.js, Jasmine, Karma, Protractor',
    details: [
        'As a senior software developer, I build the new Mobile trading app of the bank. I am the first developer involved in this green field project, so I define its architecture with a list of initial sets of components that are being published on Apple Store and Google Play platform.',
        'From a technology perspective, I introduce modern development patterns on top of the ES6+ standards, offering the teams to decide the best framework for each component they write (Angular4, ReactJs, Vue2).',
        'I introduce a strong testing infrastructure (unit + functional + integration + visual regression) to ensure the scalability of the product in the long term.',
    ]
}, {
    company: 'Sky TV',
    logo: 'logo_sky',
    position: 'Senior Software Developer',
    period: 'May 2014 - Feb 2016',
    stack: 'Javascript, AngularJS, Underscore, jQuery, HTML5, CSS3, SASS, Groovy, Jasmine, Karma, SinonJs, GruntJs, Bower, Groovy, Jenkins',
    details: [
        'As a senior software developer, I build the NOW TV web platform (http://www.nowtv.com). It is the leading VOD system in the UK, with 1.000.000+ active customers. I interact with stakeholders from other departments such as the UI/UX or the marketing ones. The working environment is extremely agile, pairing with other developers 100% of the time.',
        'As a Javascript and AngularJs developer, I\'m responsible of defining a high quality, solid and performant architecture to ensure the stability and scalability of the product in a long term view. I was selected by Sky TV to drive technical hubs about AngularJs in order to level up and synchronize the development patterns with this framework across the company.',
        'I’ve been awarded with two “Believe in Better” awards (please check the “Awards” section below for details).'
    ]
}, {
    company: 'Flowable AG',
    logo: 'logo_flowable',
    position: 'Frontend Developer',
    period: 'Oct 2011 - May 2014',
    stack: 'Javascript, AngularJS, jQuery, HTML5, CSS3, LESS, Jasmine, Karma, GruntJs, TeamCity',
    details: [
        'As a front-end developer, I build the Flowable platform (http://www.flowable.com). It is a BPM solution for the Swiss and German financial, pharmaceutical and insurance industries. ',
        'As a UI developer, I am responsible for creating predictable interfaces for non-technical users, based on intuitive events such as dragging, dropping, resizing, file multi-uploading, and so on.',
        'As an organizational leader, I am responsible to ensure that agile methodologies are being applied properly, managing backlogs on JIRA, reviewing card estimations or handling retrospective sessions.'
    ]
}, {
    company: 'Mimacom AG',
    logo: 'logo_mimacom',
    position: 'Frontend Developer',
    period: 'Oct 2009 - Oct 2011',
    stack: 'Javascript, jQuery, WebScript, HTML, CSS, Liferay Portal, Alfresco ECM',
    details: [
        'As a front-end developer, I work on multiple projects for both private organizations and the public administration across different european countries (mainly Germany, Spain and Switzerland).',
        'As a UI/UX specialist, I design the look&feel and behaviour of most of those projects.'
    ]
}, {
    company: 'Grupo Palluc',
    logo: 'logo_palluc',
    position: 'Frontend Developer',
    period: 'Sep 2006 - Oct 2009',
    stack: 'Javascript, jQuery, HTML, CSS, Liferay Portal, Joomla Portal, Alfresco ECM',
    details: [
        'As a front-end developer, I work on multiple projects for the Spanish public administration.',
        'As a UI/UX specialist, I design the look&feel and behaviour of most of those projects (wireframes + designs + actual implementation).'
    ]
}, {
    company: 'Grupo Ever Group',
    logo: 'logo_ever',
    position: 'Frontend Developer',
    period: 'Dec 2005 - Sep 2006',
    stack: 'Javascript, HTML, CSS, ActionScript',
    details: [
        'As a web developer, I create websites for different small and mid-size private businesses.',
        'As a Javascript and Flash developer, I integrate and adapt the look&feel and behaviour of all the projects where I participate.'
    ]
}, {
    company: 'VTT',
    logo: 'logo_vtt',
    position: 'Founder',
    period: 'Mar 2002 - Dec 2005',
    stack: 'Javascript, HTML, CSS, ActionScript',
    details: ['As a web developer, I create websites for different small business and public associations.']
}];

export default experienceList;