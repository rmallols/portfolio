import React from 'react';
import { render } from '@testing-library/react';
import Experience from './Experience';

describe('Experience component', () => {

    test('renders the list of companies', () => {

        // given
        const { getAllByTestId } = render(<Experience />);
        const companies = [
            'Partners Capital', 'Kodiri', 'HSBC', 'Sky TV', 'Flowable AG',
            'Mimacom AG', 'Grupo Palluc', 'Grupo Ever Group', 'VTT'
        ];

        // when
        const titleElements = getAllByTestId('ExperienceCompany-title');

        // then
        expect(titleElements).toHaveLength(9);

        // and
        titleElements.forEach((titleElement, index) => {
            expect(titleElement.textContent).toBe(companies[index]);            
        });        
    });
});