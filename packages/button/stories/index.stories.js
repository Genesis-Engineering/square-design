import { ArgsTable, Description, Stories, Title } from '@storybook/addon-docs';
import dedent from 'dedent';
import React from 'react';

import Button from '../lib';

export default {
    title: 'Button',
    component: Button,
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <Description>
                        A button component for Genesis Design System , You might use it everywhere:)
                    </Description>
                    <Description
                        markdown={dedent`
                            ## Install
                            > yarn add @genesis/button

                            ## Properties
                        `}
                    />
                    <ArgsTable />
                    <Stories />
                </>
            ),
        },
    },
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
