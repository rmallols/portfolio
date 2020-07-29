import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';
import Code from '../shared/Code/Code';

test('renders the welcome title', () => {

    //given
    const { getByTestId } = render(<Home />);

    //when
    const titleElement = getByTestId('title');

    //then
    expect(titleElement.textContent).toBe('Hi!');  
});

test('renders the welcome subtitle', () => {

    //given
    const { getByTestId } = render(<Home />);

    //when
    const subtitleElement = getByTestId('subtitle');

    //then
    expect(subtitleElement.textContent).toBe(
        'I\'m a passionatefull-stack JavaScript devbased in London.'
    );    
});