import styled from '@emotion/styled';

export const Row = styled.tr();

export const Cell = styled.td();

export const Button = styled.button`
    fill: ${({ theme }) => theme.colors.neutral400};
    transition: fill ${({ theme }) => theme.transition.normal};
  
    &:hover {
        fill: ${({ theme }) => theme.colors.red900};
    }
`
