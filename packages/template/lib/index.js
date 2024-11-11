import React from 'react';

import { StyledComponent } from './styles';

const Component = ({ props }) => {
    return (
            <StyledComponent
                {...props}
            >
                This is component template
            </StyledComponent>
    );
};

export default Component;
