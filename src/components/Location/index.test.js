import React from 'react';
import { render } from '@testing-library/react';
import Location from '.';

const props = {
    location: 'Fitzrovia'
};

describe('Location component', () => {
    it('should render', () => {
        const { container } = render(<Location {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
