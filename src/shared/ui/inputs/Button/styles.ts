import styled from '@emotion/styled';
import rgba from 'polished/lib/color/rgba';

export const Wrapper = styled.button`
    border-radius: 50px;
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    box-shadow: 0 5px 10px ${({ theme }) => rgba(theme.colors.black, 0.3)};
    padding: 20px 30px;
    transition: opacity ${({ theme }) => theme.transition.normal};
  
    &:hover:not(:disabled) {
        opacity: 0.7;
    }
  
    &:disabled {
        background-color: ${({ theme }) => theme.colors.gray};
        box-shadow: none;
        cursor: auto;
    }
`
