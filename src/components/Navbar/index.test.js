import React from 'react';
import { render } from '@testing-library/react';
import { useMediaQuery } from 'react-responsive';
import Navbar from '.';

jest.mock('react-responsive', () => ({
    useMediaQuery: jest.fn(() => false)
}));

describe('Navbar component', () => {
    it('should render with small logo', () => {
        const { container, getByTestId } = render(<Navbar />);
        expect(container.firstChild).toMatchSnapshot();
        getByTestId('navbarSmallLogo');
    });

    it('should render with large logo of non-mobile devices', () => {
        useMediaQuery.mockImplementation(() => true);

        const { getByTestId } = render(<Navbar />);
        getByTestId('navbarLogo');
    });
});
