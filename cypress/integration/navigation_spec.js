import { get } from '../utils/selectors';

context('Navigation', () => {

    before(() => {
        cy.visit(Cypress.config().baseUrl);
    });

    beforeEach(() => {
        //We delay each test to ensure all the animations are complete
        //before running any further operations. Thanks to that,
        //the tests feel more natural too as they perform
        //closer to human interaction
        cy.wait(2000);
    });

    const routes = [{
        text: 'Home', path: '/', selector: 'Home-title', contains: 'Hi!'
    }, {
        text: 'About me', path: '/about-me', selector: 'AboutMe',
        contains: 'I\'m a Software Engineer'
    }, {
        text: 'Skills', path: '/skills', selector: 'SkillsText-title',
        contains: 'I love JavaScript!'
    }, {
        text: 'Experience', path: '/experience',
        selector: 'ExperienceCompany-0', contains: 'Kodiri'
    }, {
        text: 'Community', path: '/community', selector: 'Community-text',
        contains: 'I love to connect with other coding enthusiasts!'
    }];

    const getLink = index => get('HeaderMenu').find('a').eq(index);
    const getNextRoute = index => routes[index + 1];

    describe('internal navigation', () => {

        routes
            .slice(0, routes.length - 1)
            .forEach(({ text, path, selector, contains }, index) => {

                describe(`${text} view`, () => {

                    it('displays the link as active', () => {
                        get(selector).contains(contains);
                        getLink(index).contains(text);
                        getLink(index)
                            .should('have.attr', 'href')
                            .and('include', path);
                        getLink(index).should('have.class', 'is-active');
                    });

                    it('navigates to the next view', () => {
                        getLink(index + 1).click();
                        cy.url().should('include', getNextRoute(index).path);
                    });

                    it('goes back to the previous page', () => {
                        cy.go('back');
                        get('Footer-link').contains(getNextRoute(index).text);
                    });

                    it('navigates again by the footer link', () => {
                        get('Footer-link').click();
                        cy.url().should('include', getNextRoute(index).path);
                    });
                });
            });
    });

    describe('external navigation', () => {

        it('navigates to the email client by clicking on "Contact me', () => {
            getLink(5).contains('Contact me');
            getLink(5)
                .should('have.attr', 'href')
                .and('include', 'hi@mallols.dev');
        });
    });

    describe('logo navigation', () => {

        it('returns to the home page by clicking on the logo', () => {
            const targetUrl = `${Cypress.env('host')}/`;
            cy.url().should('not.eq', targetUrl);
            get('HeaderLogo').click();
            cy.url().should('eq', targetUrl);
        });
    });
});