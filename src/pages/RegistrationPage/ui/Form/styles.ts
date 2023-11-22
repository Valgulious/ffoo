import styled from '@emotion/styled';
import { Button as BaseButton } from 'shared/ui/inputs/Button';
import { css } from '@emotion/react';

type WrapperProps = {
    isLoading?: boolean;
}

const loadingFormCss = css`
    opacity: 0.5;
    pointer-events: none;
`

export const Wrapper = styled.form<WrapperProps>`
    margin-top: 40px;
    display: grid;
    row-gap: 20px;
    
    ${({ isLoading }) => isLoading && loadingFormCss};
`;

export const SplitInputsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  
    @media (max-width: 600px) {
      grid-template-columns: initial;
    }
`;

export const Button = styled(BaseButton)`
    width: min-content;
    justify-self: center;
`;
