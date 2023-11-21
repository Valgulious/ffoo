import { FC } from 'react';
import { Wrapper } from './styles';
import { Link } from 'shared/ui/navigation/Link';

export const Hint: FC = () => {
    return (
        <Wrapper>
            Нажимая «Записаться», я выражаю свое согласие с обработкой моих персональных данных в соответствии с принятой
            &ensp;<Link href="#" linkVariant="external">политикой конфиденциальности</Link>&ensp;
            и принимаю
            &ensp;<Link href="#" linkVariant="external">пользовательское соглашение</Link>
        </Wrapper>
    );
};
