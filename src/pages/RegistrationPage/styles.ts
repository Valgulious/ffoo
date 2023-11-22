import styled from '@emotion/styled';

export const Wrapper = styled.div`
    max-width: 600px;
    margin: 50px auto;
`;

export const Title = styled.h1`
    font-size: 36px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  margin-top: 20px;
`

export const LogoContainer = styled.div`
    max-height: 40px;
    display: flex;
    column-gap: 10px;
    align-items: center;
`
