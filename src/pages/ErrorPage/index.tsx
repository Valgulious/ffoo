import { ROOT } from 'shared/const/pageRoutes';
import { Wrapper, Title, Link } from './styles';

export default function ErrorPage() {
    return (
        <Wrapper>
            <Title>Что-то пошло не так</Title>
            <Link href={ROOT}>На главную</Link>
        </Wrapper>
    );
}