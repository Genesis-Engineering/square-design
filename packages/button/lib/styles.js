import styled, { createGlobalStyle } from 'styled-components';

export const GlobalButtonStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;700&display=swap');
    
    :root {
        --sd-title-active: #222222;
        --sd-body: #333333;
        --sd-label: #555555;
        --sd-placeholder: #888888;
        --sd-line: #DCDCDC;
        --sd-input-baground: #F0F0F0;
        --sd-background: #F8F8F8;
        --sd-off-white: #FCFCFC;
        --sd-primary: #002EF1;
        --sd-primary-dark: #0000EA;
        --sd-primary-light: #005CFF;
        --sd-secondary: #FFB802;
        --sd-secondary-dark: #FF9700;
        --sd-secondary-light: #FFE604;

        --sd-size: 8px;
    }
`;

export const StyledComponent = styled.button`
    &.sd-button {
        cursor: pointer;
        padding: var(--sd-size) calc(4 * var(--sd-size));
        outline: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;

        border-style: solid;
        border-width: 1px;
        border-radius: var(--sd-size);

        &:hover,
        &:focus,
        &:focus-within,
        &:focus-within {
            outline: var(--sd-line) solid calc(var(--sd-size) / 2);
        }

        &__disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        &__primary {
            background-color: var(--sd-primary);
            color: var(--sd-off-white);
            border-color: var(--sd-primary);
        }

        &__secondary {
            background-color: transparent;
            color: var(--sd-primary);
            border-color: var(--sd-primary);
        }

        &__subtle {
            background-color: transparent;
            color: var(--sd-primary);
            border-color: var(--sd-placeholder);
        }

        &__text {
            background-color: transparent;
            color: var(--sd-primary);
            border-color: transparent;
        }
    }
`;
