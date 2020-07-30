export function get(selector, options = {}) {
    return cy.get(getFullSelector(selector), options);
}

export function getFullSelector(selector) {
    return `[data-testid='${selector}']`;
}