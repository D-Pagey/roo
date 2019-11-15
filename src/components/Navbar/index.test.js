import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '.';

describe('Navbar component', () => {
    it('should render', () => {
        const { container } = render(<Navbar />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
