import styled from '@emotion/styled';
import { css } from '@emotion/react';
import rgba from 'polished/lib/color/rgba';
import type { Theme } from 'shared/types/theme';

const activeControlCss = (theme: Theme) => css`
    background-color: ${theme.colors.neutral0};
    border: 1px solid ${theme.colors.neutral400};
    box-shadow: 0 5px 10px ${rgba(theme.colors.neutral900, 0.3)};
    padding: 19px 20px;
`;

const errorControlCss = (theme: Theme) => css`
    background-color: ${theme.colors.red200};
`;

export const controlCss = (theme: Theme, isActive: boolean, hasError: boolean) => css`
    border-radius: 4px;
    padding: 20px;
    background-color: ${theme.colors.neutral200};
    font-weight: ${theme.font.weight.medium};
    display: flex;

    ${hasError && errorControlCss(theme)};
    ${isActive && activeControlCss(theme)};
`;

const errorPlaceholderCss = (theme: Theme) => css`
    color: ${theme.colors.red900};
`;

export const placeholderCss = (theme: Theme, hasError: boolean, isFocused: boolean) => css`
    color: ${theme.colors.neutral600};
    grid-area: 1 / 1 / 2 / 3;

    ${hasError && !isFocused && errorPlaceholderCss(theme)};
`;

export const menuListCss = (theme: Theme) => css`
    margin-top: 4px;
    border: 1px solid ${theme.colors.neutral400};
    border-radius: 4px;
    box-shadow: 0 5px 10px ${rgba(theme.colors.neutral900, 0.3)};
    background-color: ${theme.colors.neutral0};
`;

export const noOptionsCss = css`
    padding: 10px 20px;
    text-align: center;
`;

const focusedOptionCss = (theme: Theme) => css`
    background-color: ${theme.colors.neutral400};
`;

const selectedOptionCss = (theme: Theme) => css`
    background-color: ${theme.colors.neutral600};
`;

export const optionCss = (theme: Theme, isFocused: boolean, isSelected: boolean) => css`
    padding: 10px 20px;

    ${isFocused && focusedOptionCss(theme)};
    ${isSelected && selectedOptionCss(theme)};
`;

export const Wrapper = styled.div();

export const Error = styled.p`
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.red900};
`;
