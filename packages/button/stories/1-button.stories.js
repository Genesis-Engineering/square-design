import React from 'react';
import Button from '../lib';

export default {
    title: 'Button',
    component: Button,
};

export const Primary = () => <Button>Button</Button>;

export const Secondary = () => <Button variant="secondary">Button</Button>;

export const Subtle = () => <Button variant="subtle">Button</Button>;

export const Text = () => <Button variant="text">Button</Button>;

export const Disabled = () => (
    <Button disabled onClick={() => console.log('this should not triggered')}>
        Button
    </Button>
);
