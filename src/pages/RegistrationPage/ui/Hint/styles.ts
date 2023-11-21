import styled from '@emotion/styled';

export const Wrapper = styled.p`
    margin-top: 30px;
    margin-right: 50px;
    font-size: 12px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    color: ${({ theme }) => theme.colors.neutral400};
`;
