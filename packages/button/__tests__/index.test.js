import '@testing-library/jest-dom';
import 'jest-styled-components';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Button from '../lib';

describe('Button Component', () => {
    const onClickMock = jest.fn();

    beforeEach(() => {
        render(<Button onClick={onClickMock}>this is</Button>);
    });

    it('it should render a component correctly', async () => {
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button.classList).toContain('ge-button');
        expect(button).toHaveStyleRule('outline', 'var(--ge-line) solid calc(var(--ge-size) / 2)', {
            modifier: '&.ge-button:hover',
        });
        fireEvent(
            button,
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            }),
        );
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    it('it should render a component with variant correctly', async () => {
        const button = screen.getByRole('button');
        expect(button).toHaveStyleRule('background-color', 'var(--ge-primary)', {
            modifier: '&.ge-button__primary',
        });
        expect(button).toHaveStyleRule('background-color', 'transparent', {
            modifier: '&.ge-button__secondary',
        });
    });
});

describe('Disabled Button Component', () => {
    const onClickMock = jest.fn();

    beforeEach(() => {
        render(
            <Button disabled onClick={onClickMock}>
                this is disabled button
            </Button>,
        );
    });

    it('it should render a disabled component  correctly', async () => {
        const button = screen.getByRole('button');
        expect(button).toHaveStyleRule('opacity', '0.5', {
            modifier: '&.ge-button__disabled',
        });
        fireEvent(
            button,
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            }),
        );
        expect(onClickMock).toHaveBeenCalledTimes(0);
    });
});
