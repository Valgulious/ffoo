import { FC, Fragment } from 'react';
import { Phone } from 'shared/ui/format/Phone';
import { Price } from 'shared/ui/format/Price';
import { useCity } from 'pages/RegistrationPage/model/service/useCity';
import { Wrapper, Br } from './styles';

type Props = {
    cityId?: string;
}

export const CityInformation: FC<Props> = (props) => {
    const { cityId } = props;
    const city = useCity(cityId);

    if (!city) {
        return null;
    }

    const { address, phones, price } = city;

    return (
        <Wrapper>
            {address}
            <Br />
            {phones.map((phone, index) => {
                const suffix = index === phones.length - 1 ? '' : ', ';

                return (
                    <Fragment key={phone}>
                        <Phone phone={phone} />{suffix}
                    </Fragment>
                );
            })}
            <Br />
            Стоимость услуги <Price price={price} />
        </Wrapper>
    );
};
