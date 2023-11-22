import { FC } from 'react';
import { Link } from 'shared/ui/navigation/Link';
import { Wrapper, WrapperProps } from './styles';

type Props = WrapperProps;

export const Hint: FC<Props> = (props) => {
    const { isLoading } = props;

    return (
        <Wrapper isLoading={isLoading}>
            Нажимая «Записаться», я выражаю свое согласие с обработкой моих персональных данных в соответствии с принятой
            &ensp;<Link href="#" linkVariant="external">политикой конфиденциальности</Link>&ensp;
            и принимаю
            &ensp;<Link href="#" linkVariant="external">пользовательское соглашение</Link>
        </Wrapper>
    );
};
