import { FC, useState } from 'react';
import { v4 } from 'uuid';
import { showToast } from 'shared/lib/showToast';
import { Order } from 'entities/Order';
import { useOrder } from 'features/order/service/useOrder';
import type { RegistrationFormSubmitHandler } from './model/types/form';
import { Form } from './ui/Form';
import { Hint } from './ui/Hint';
import { Wrapper, Title, SubTitle } from './styles';

export const RegistrationPage: FC = () => {
    const { saveOrder } = useOrder();
    const [isLoading, setIsLoading] = useState(false);

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

        reset();
        showToast('Запись успешно создана', {
            type: 'success',
        })
        setIsLoading(false);
    };

    return (
        <Wrapper>
            <Title>ffoo</Title>
            <SubTitle>Онлайн запись</SubTitle>
            <Form onSubmit={handleSubmit} isSubmitting={isLoading} />
            <Hint />
        </Wrapper>
    );
};
