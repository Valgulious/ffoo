import styled from '@emotion/styled';

export const Wrapper = styled.div`
    width: 600px;
    margin: 50px auto;
`;

export const Title = styled.h1`
    font-size: 48px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    line-height: 1;
`;

export const SubTitle = styled.h2`
    font-size: 24px;
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    margin-top: 20px;
`;
