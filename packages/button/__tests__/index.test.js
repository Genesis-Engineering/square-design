import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import React from 'react';

import Button from '../lib';

describe('Button Component', function () {
    let buttonContainer;

    beforeEach(() => {
        const { container } = render(<Button>this is</Button>);
        buttonContainer = container;
    });

    it('it should render a component', async () => {
        expect(buttonContainer).toBeInTheDocument();
        expect(buttonContainer).toMatchSnapshot();
    });
});
