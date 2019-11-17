import React from 'react';
import { render } from '@testing-library/react';
import { useMediaQuery } from 'react-responsive';
import data from '../../restaurants';
import App from '.';

jest.mock('react-responsive', () => ({
    useMediaQuery: jest.fn(() => false)
}));

describe('App component', () => {
    it('should render', () => {
        const { container } = render(<App />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('shows quantity of restaurants on non-mobile', () => {
        useMediaQuery.mockImplementation(() => true);

        const { getByText } = render(<App />);
        getByText(`${data.restaurants.length} Restaurants`);
    });
});
