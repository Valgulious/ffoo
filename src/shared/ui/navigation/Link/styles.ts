import styled from '@emotion/styled';

export const Wrapper = styled.a`
    color: ${({ theme }) => theme.colors.blue500};
    transition: opacity ${({ theme }) => theme.transition.normal};
    text-decoration: none;
  
    &:hover {
        opacity: 0.7;
    }
`;
