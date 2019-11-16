import React from 'react';
import { render } from '@testing-library/react';
import { useMediaQuery } from 'react-responsive';
import Navbar from '.';

jest.mock('react-responsive', () => ({
    useMediaQuery: jest.fn(() => false)
}));

describe('Navbar component', () => {
    it('should render', () => {
        const { container } = render(<Navbar />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should render with small logo on mobile devices', () => {
        useMediaQuery.mockImplementationOnce(() => false);

        const { getByTestId } = render(<Navbar />);
        getByTestId('navbarSmallLogo');
    });

    it('should render with large logo of non-mobile devices', () => {
        useMediaQuery.mockImplementationOnce(() => true);

        const { getByTestId } = render(<Navbar />);
        getByTestId('navbarLogo');
    });
});
