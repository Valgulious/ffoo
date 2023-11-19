import { FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from 'shared/ui/inputs/Input';
import { PatternFormatInput } from 'shared/ui/inputs/PatternFormatInput';
import { Select } from 'shared/ui/controlled/Select';
import type { RegistrationForm } from 'pages/RegistrationPage/model/types/form.ts';
import { useRegistrationForm, UseRegistrationFormProps } from 'pages/RegistrationPage/model/service/useRegistrationForm';
import { registrationFormValidationSchema } from 'pages/RegistrationPage/model/validation/registrationFormValidationSchema';
import { useCityOptions } from 'pages/RegistrationPage/model/service/useCityOptions.ts';
import { useDateOptions } from 'pages/RegistrationPage/model/service/useDateOptions.ts';
import { useTimeOptions } from 'pages/RegistrationPage/model/service/useTimeOptions.ts';
//TODO: Возможно вынести в entities
import { City } from './ui/City';
import { Wrapper, SplitInputsContainer, Button } from './styles';

type Props = UseRegistrationFormProps & {
    isSubmitting: boolean;
};

export const Form: FC<Props> = (props) => {
    const { isSubmitting, ...formProps } = props;
    const {
        register,
        getInputError,
        onSubmit,
        isValid,
        control,
        watch,
    } = useRegistrationForm({
        mode: 'all',
        resolver: zodResolver(registrationFormValidationSchema),
        ...formProps,
    })
    const [city, date] = watch(['city', 'date']);
    const cityOptions = useCityOptions();
    const dateOptions = useDateOptions(city?.value);
    const timeOptions = useTimeOptions(city?.value, date?.value);
    const isButtonDisabled = !isValid || isSubmitting;

    return (
        <Wrapper onSubmit={onSubmit}>
            <Select<RegistrationForm>
                placeholder="Город"
                options={cityOptions}
                name="city"
                control={control}
                {...getInputError('city')}
            />
            <City cityId={city?.value} />
            <SplitInputsContainer>
                <Select<RegistrationForm>
                    placeholder="Дата"
                    options={dateOptions}
                    name="date"
                    control={control}
                    {...getInputError('date')}
                />
                <Select<RegistrationForm>
                    placeholder="Время"
                    options={timeOptions}
                    name="time"
                    control={control}
                    {...getInputError('time')}
                />
            </SplitInputsContainer>
            <PatternFormatInput
                format="+7 (###) ###-##-##"
                mask="_"
                inputProps={{
                    placeholder: '+7 (___) ___-__-__',
                    ...getInputError('phone'),
                }}
                {...register('phone')}
            />
            <Input
                placeholder="Ваше имя"
                {...register('name')}
                {...getInputError('name')}
            />
            <Button
                type="submit"
                disabled={isButtonDisabled}
            >
                Записаться
            </Button>
        </Wrapper>
    );
};
