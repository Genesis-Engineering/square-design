import styled, { createGlobalStyle } from 'styled-components';

export const GlobalButtonStyle = createGlobalStyle`
    :root {
        --ge-title-active: #222222;
        --ge-body: #333333;
        --ge-label: #555555;
        --ge-placeholder: #888888;
        --ge-line: #DCDCDC;
        --ge-input-baground: #F0F0F0;
        --ge-background: #F8F8F8;
        --ge-off-white: #FCFCFC;
        --ge-primary: #002EF1;
        --ge-primary-dark: #0000EA;
        --ge-primary-light: #005CFF;
        --ge-secondary: #FFB802;
        --ge-secondary-dark: #FF9700;
        --ge-secondary-light: #FFE604;

        --ge-size: 8px;
    }

    /* vietnamese */
    @font-face {
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/epilogue/v12/O4ZRFGj5hxF0EhjimlIrsgg4lWmc8kI.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/epilogue/v12/O4ZRFGj5hxF0EhjimlIqsgg4lWmc8kI.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/epilogue/v12/O4ZRFGj5hxF0EhjimlIksgg4lWmc.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* vietnamese */
    @font-face {
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/epilogue/v12/O4ZRFGj5hxF0EhjimlIrsgg4lWmc8kI.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/epilogue/v12/O4ZRFGj5hxF0EhjimlIqsgg4lWmc8kI.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/epilogue/v12/O4ZRFGj5hxF0EhjimlIksgg4lWmc.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* vietnamese */
    @font-face {
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/epilogue/v12/O4ZRFGj5hxF0EhjimlIrsgg4lWmc8kI.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/epilogue/v12/O4ZRFGj5hxF0EhjimlIqsgg4lWmc8kI.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/epilogue/v12/O4ZRFGj5hxF0EhjimlIksgg4lWmc.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
`;

export const StyledComponent = styled.button`
    &.ge-button {
        cursor: pointer;
        padding: var(--ge-size) calc(4 * var(--ge-size));
        outline: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;

        border-style: solid;
        border-width: 1px;
        border-radius: var(--ge-size);

        &:hover,
        &:focus,
        &:focus-within,
        &:focus-visible {
            outline: var(--ge-line) solid calc(var(--ge-size) / 2);
        }

        &__disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        &__primary {
            background-color: var(--ge-primary);
            color: var(--ge-off-white);
            border-color: var(--ge-primary);
        }

        &__secondary {
            background-color: transparent;
            color: var(--ge-primary);
            border-color: var(--ge-primary);
        }

        &__subtle {
            background-color: transparent;
            color: var(--ge-primary);
            border-color: var(--ge-placeholder);
        }

        &__text {
            background-color: transparent;
            color: var(--ge-primary);
            border-color: transparent;
        }
    }
`;
