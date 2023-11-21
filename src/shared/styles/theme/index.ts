import type { Theme } from 'shared/types/theme.ts';

export const theme: Theme = {
    colors: {
        neutral0: '#ffffff',
        neutral200: '#e8e8e8',
        neutral400: '#c1c1c1',
        neutral600: '#969696',
        neutral900: '#000000',
        red200: '#fae5e8',
        red900: '#db001b',
        blue500: '#1b75cc',
    },
    transition: {
        normal: '400ms',
    },
    font: {
        weight: {
            regular: '400',
            medium: '500',
            semiBold: '600',
            bold: '700',
        },
    },
};
