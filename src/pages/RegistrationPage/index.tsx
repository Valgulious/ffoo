import { FC, useState } from 'react';
import { v4 } from 'uuid';
import LogoIcon from 'shared/assets/icons/logo.svg?react';
import { showToast } from 'shared/lib/showToast';
import { Order } from 'entities/Order';
import { useOrder } from 'features/order/service/useOrder';
import type { RegistrationFormSubmitHandler } from './model/types/form';
import { useCityOptions } from './model/service/select/useCityOptions';
import { Form } from './ui/Form';
import { Hint } from './ui/Hint';
import { Wrapper, Title } from './styles';

export const RegistrationPage: FC = () => {
    const { saveOrder } = useOrder();
    const [isLoading, setIsLoading] = useState(false);
    const { defaultOption: defaultCityOption } = useCityOptions();

    const handleSubmit: RegistrationFormSubmitHandler = async (formData, { reset }) => {
        setIsLoading(true);

        const { date, name, time, phone, city } = formData;
        const order: Order = {
            id: v4(),
            city: city?.label ?? '',
            date: date?.value ?? '',
            name: name ?? '',
            time: time?.label ?? '',
            phone: phone?.slice(1) ?? '',
        };

        await saveOrder(order);

        reset({
            city: defaultCityOption,
            name: '',
        });
        showToast('Запись успешно создана', {
            type: 'success',
        })
        setIsLoading(false);
    };

    return (
        <Wrapper>
            <LogoIcon width={135} />
            <Title>Онлайн запись</Title>
            <Form onSubmit={handleSubmit} isSubmitting={isLoading} defaultValues={{ phone: '' }} />
            <Hint />
        </Wrapper>
    );
};
