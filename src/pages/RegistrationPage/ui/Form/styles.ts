import styled from '@emotion/styled';
import { Button as BaseButton } from 'shared/ui/inputs/Button';

export const Wrapper = styled.form`
    margin-top: 40px;
    display: grid;
    row-gap: 20px;
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
