import styled from '@emotion/styled';
import { css } from '@emotion/react';

export type WrapperProps = {
    isLoading?: boolean;
}

const loadingWrapperCss = css`
    opacity: 0.5;
    pointer-events: none;
`;

export const Wrapper = styled.p<WrapperProps>`
    margin-top: 30px;
    margin-right: 50px;
    font-size: 12px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    color: ${({ theme }) => theme.colors.neutral400};
  
    ${({ isLoading }) => isLoading && loadingWrapperCss};
`;
