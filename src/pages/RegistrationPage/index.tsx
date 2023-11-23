import { FC, useState } from 'react';
import { v4 } from 'uuid';
import LogoIcon from 'shared/assets/icons/logo.svg?react';
import { Loader } from 'shared/ui/display/Loader';
import { showToast } from 'shared/lib/showToast';
import { Order } from 'entities/Order';
import { useOrder } from 'features/order/service/useOrder';
import type { RegistrationFormSubmitHandler } from './model/types/form';
import { useCityList } from './model/swr/useCityList';
import { useCityOptions } from './model/service/select/useCityOptions';
import { useDateStore } from './model/store/useDateStore.ts';
import { Form } from './ui/Form';
import { Hint } from './ui/Hint';
import { Wrapper, Title, SubTitle, LogoContainer } from './styles';

export const RegistrationPage: FC = () => {
    const { saveOrder } = useOrder();
    const { isLoading: isDateListLoading } = useDateStore();
    const { isLoading: isCityListLoading } = useCityList();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { defaultOption: defaultCityOption } = useCityOptions();
    const isLoading = isCityListLoading || isDateListLoading || isSubmitting;

    const handleSubmit: RegistrationFormSubmitHandler = async (formData, { reset }) => {
        setIsSubmitting(true);

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
            phone: '',
        });
        showToast('Запись успешно создана', {
            type: 'success',
        })
        setIsSubmitting(false);
    };

    return (
        <Wrapper>
            <LogoContainer>
                {!isLoading && <LogoIcon width={40} />}
                {isLoading && <Loader />}
                <Title>ffoo</Title>
            </LogoContainer>
            <SubTitle>Онлайн запись</SubTitle>
            <Form
                onSubmit={handleSubmit}
                isLoading={isLoading}
            />
            <Hint isLoading={isLoading}/>
        </Wrapper>
    );
};
