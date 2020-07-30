import React from 'react';
import { render } from '@testing-library/react';
import AboutMe from './AboutMe';

test('renders some text', () => {

    // given
    const { getByTestId } = render(<AboutMe />);
    const expectedText = 'I’m a highly proficient Javascript';

    // when
    const textElement = getByTestId('AboutMe');

    // then
    expect(textElement.textContent.includes(expectedText)).toBe(true);  
});