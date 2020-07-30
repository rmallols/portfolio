import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('renders the welcome title', () => {

    // given
    const { getByTestId } = render(<Home />);


    // when
    const titleElement = getByTestId('Home-title');

    // then
    expect(titleElement.textContent).toBe('Hi!');  
});

test('renders the welcome subtitle', () => {

    // given
    const { getByTestId } = render(<Home />);

    // when
    const subtitleElement = getByTestId('Home-subtitle');

    // then
    // note the absence of a space between "passionate" and "full-stack"
    // which is consequence of a break-line between these elements
    expect(subtitleElement.textContent).toBe(
        'I\'m a passionatefull-stack JavaScript devbased in London.'
    );    
});