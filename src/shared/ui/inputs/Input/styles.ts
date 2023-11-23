import styled from '@emotion/styled';
import { css } from '@emotion/react';
import rgba from 'polished/lib/color/rgba';
import type { ColorKey, Theme } from 'shared/types/theme';

export const Wrapper = styled.div();

type InputProps = {
    hasError?: boolean;
};

const placeholderInputCss = (theme: Theme, color: ColorKey) => css`
    &::placeholder {
        color: ${theme.colors[color]};
    }
`;

const errorInputCss = (theme: Theme) => css`
    background-color: ${theme.colors.red200};

    ${placeholderInputCss(theme, 'red900')};
`;

export const BaseInput = styled.input<InputProps>`
    all: unset;
    box-sizing: border-box;
    width: 100%;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    border-radius: 4px;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.neutral200};

    ${({ theme }) => placeholderInputCss(theme, 'neutral600')};
    ${({ theme, hasError }) => hasError && errorInputCss(theme)};

    &:focus,
    &:focus-visible {
        background-color: ${({ theme }) => theme.colors.neutral0};
        border: 1px solid ${({ theme }) => theme.colors.neutral400};
        box-shadow: 0 5px 10px ${({ theme }) => rgba(theme.colors.neutral900, 0.3)};
        padding: 19px 20px;

        ${({ theme }) => placeholderInputCss(theme, 'neutral600')};
    }
`;

export const Error = styled.p`
    margin-top: 5px;
    color: ${({ theme }) => theme.colors.red900};
`;
