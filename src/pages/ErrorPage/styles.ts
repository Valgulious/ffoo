import styled from '@emotion/styled';
import { Link as BaseLink } from 'shared/ui/navigation/Link';

export const Wrapper = styled.div`
    display: grid;
    place-items: center;
    align-content: center;
    gap: 50px;
    height: 100vh;
`;

export const Title = styled.h1`
    text-align: center;
    height: min-content;
`;

export const Link = styled(BaseLink)`
    font-size: 20px;
    text-decoration: underline;
    height: min-content;
`;
