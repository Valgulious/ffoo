import { FC, Fragment } from 'react';
import type { Variants } from 'framer-motion';
import { Phone } from 'shared/ui/format/Phone';
import { Price } from 'shared/ui/format/Price';
import { Link } from 'shared/ui/navigation/Link';
import { useCity } from 'pages/RegistrationPage/model/service/useCity';
import { Wrapper, Paragraph } from './styles';

const VARIANTS: Variants = {
    hidden: {
        height: 0,
    },
    show: {
        height: 'auto',
        transition: {
            duration: 0.25,
            ease: 'linear',
        }
    }
}

type Props = {
    cityId?: string;
};

export const CityInformation: FC<Props> = (props) => {
    const { cityId } = props;
    const city = useCity(cityId);

    if (!city) {
        return null;
    }

    const { address, phones, price } = city;

    return (
        <Wrapper variants={VARIANTS} initial="hidden" animate="show">
            <Paragraph>{address}</Paragraph>
            <Paragraph>
                {phones.map((phone, index) => {
                    const suffix = index === phones.length - 1 ? '' : ', ';

                    return (
                        <Fragment key={phone}>
                            <Link href={`tel:+${phone}`}>
                                <Phone phone={phone} />
                            </Link>
                            {suffix}
                        </Fragment>
                    );
                })}
            </Paragraph>
            <Paragraph>Стоимость услуги <Price price={price} /></Paragraph>
        </Wrapper>
    );
};
