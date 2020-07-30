import React from 'react';
import { render } from '@testing-library/react';
import Skills from './Skills';

test('renders some text', () => {

    // given
    const { getByTestId } = render(<Skills />);
    const expectedText = 'I’m a highly proficient Javascript';

    // when
    const titleElement = getByTestId('SkillsText-title');

    // then
    expect(titleElement.textContent).toBe('I love JavaScript!');  
});