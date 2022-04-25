import { render } from '@testing-library/react';
import React from 'react';

import Template from '../lib';

describe('Template Component', () => {
    let componentContainer;
    beforeEach(() => {
        const { container } =  render(<Template/>);
        componentContainer = container;
    });

    it('it should render a component correctly', () => {
        expect(componentContainer).toBeInTheDocument();
        expect(componentContainer).toMatchSnapshot();
    });
});
