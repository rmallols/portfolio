import React from 'react';
import { render } from '@testing-library/react';
import Community from './Community';

describe('Community component', () => {

    test('renders some text', () => {

        // given
        const { getByTestId } = render(<Community />);
        const expectedText = 'I’m a highly proficient Javascript';

        // when
        const titleElement = getByTestId('Community-text');

        // then
        expect(titleElement.textContent.includes(
            'I love to getting involved with coding communities!'
        )).toBe(true);
    });
});