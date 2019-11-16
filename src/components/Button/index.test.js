import React from 'react';
import { render } from '@testing-library/react';
import Button from '.';

describe('Button component', () => {
    it('should render', () => {
        const { container } = render(<Button>Change location</Button>);
        expect(container.firstChild).toMatchSnapshot();
    });
});
