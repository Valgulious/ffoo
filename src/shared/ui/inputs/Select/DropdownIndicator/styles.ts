import styled from '@emotion/styled';
import { css } from '@emotion/react';
import ChevronDownIcon from 'shared/assets/icons/chevron-down.svg?react';

type IconProps = {
    isMenuOpen: boolean;
}

const openIconCss = css`
    transform: rotate(180deg);
`

export const Icon = styled(ChevronDownIcon, {
    shouldForwardProp: (propName) => propName !== 'isMenuOpen',
})<IconProps>`
    fill: ${({ theme }) => theme.colors.neutral400};
  
    ${({ isMenuOpen }) => isMenuOpen && openIconCss};
`
