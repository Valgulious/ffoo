import styled from '@emotion/styled';
import { Loader as BaseLoader } from 'shared/ui/display/Loader';

export const Wrapper = styled.div`
    max-width: 600px;
    margin: 50px auto;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    margin-top: 20px;
`;

export const LogoContainer = styled.div`
    position: relative;
`

export const Loader = styled(BaseLoader)`
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.neutral0};
`
