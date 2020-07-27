import Home from '../../Home/Home';
import AboutMe from '../../AboutMe/AboutMe';
import Skills from '../../Skills/Skills';
import Experience from '../../Experience/Experience';
import Community from '../../Community/Community';

const routes = [
    { to: '/', text: 'Home', component: Home },
    { to: '/about-me', text: 'About me', component: AboutMe },
    { to: '/skills', text: 'Skills', component: Skills },
    { to: '/experience', text: 'Experience', component: Experience },
    { to: '/community', text: 'Community', component: Community },
    { to: 'mailto:ricardo.mallols@gmail.com', text: 'Contact me', isExternal: true },
];

export default routes;