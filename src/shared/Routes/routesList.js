import Home from '../../Home/Home';
import AboutMe from '../../AboutMe/AboutMe';
import Skills from '../../Skills/Skills';
import Experience from '../../Experience/Experience';
import Community from '../../Community/Community';

const routesList = [
    { id: 'home', to: '/', text: 'Home', component: Home },
    { id: 'about-me', to: '/about-me', text: 'About me', component: AboutMe },
    { id: 'skills', to: '/skills', text: 'Skills', component: Skills },
    { id: 'experience', to: '/experience', text: 'Experience', component: Experience },
    { id: 'community', to: '/community', text: 'Community', component: Community },
    { id: 'contact-me', to: 'mailto:ricardo.mallols@gmail.com', text: 'Contact me', isExternal: true },
];

export default routesList;