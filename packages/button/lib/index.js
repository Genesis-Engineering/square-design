import React from 'react';
import { StyledComponent, GlobalButtonStyle } from './styles';
import PropTypes from 'prop-types';

const Component = ({ variant = 'primary', disabled, onClick, children, ...restProps }) => {
    const handleClick = (e) => {
        if (!disabled) {
            onClick(e);
        }
    };
    return (
        <>
            <GlobalButtonStyle />
            <StyledComponent
                {...restProps}
                className={`ge-button ge-button__${variant} ${
                    disabled ? 'ge-button__disabled' : ''
                } ${restProps.className ?? ''}`}
                onClick={handleClick}
            >
                {children}
            </StyledComponent>
        </>
    );
};

Component.propTypes = {
    children: PropTypes.node,
    variant: PropTypes.oneOf('primary', 'secondary', 'subtle', 'text'),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Component;
