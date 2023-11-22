import { FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from 'shared/ui/inputs/Input';
import { PatternFormatInput } from 'shared/ui/controlled/PatternFormatInput';
import { Select } from 'shared/ui/controlled/Select';
import {
    useRegistrationForm,
    UseRegistrationFormProps,
} from 'pages/RegistrationPage/model/service/useRegistrationForm';
import { useRegistrationFormSelects } from 'pages/RegistrationPage/model/service/select/useRegistrationFormSelects';
import { registrationFormValidationSchema } from 'pages/RegistrationPage/model/validation/registrationFormValidationSchema';
import type { RegistrationForm } from 'pages/RegistrationPage/model/types/form';
import { CityInformation } from './ui/CityInformation';
import { Wrapper, SplitInputsContainer, Button } from './styles';

type Props = UseRegistrationFormProps & {
    isSubmitting: boolean;
};

export const Form: FC<Props> = (props) => {
    const { isSubmitting, ...formProps } = props;
    const { register, getInputError, onSubmit, isValid, control, watch, setValue } =
        useRegistrationForm({
            mode: 'onBlur',
            resolver: zodResolver(registrationFormValidationSchema),
            ...formProps,
        });
    const { cityOptions, dateOptions, timeOptions, city } = useRegistrationFormSelects({
        watch,
        setValue,
    });
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
            <CityInformation cityId={city?.value} />
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
            <PatternFormatInput<RegistrationForm>
                name="phone"
                control={control}
                format="+7 (###) ###-##-##"
                mask="_"
                inputProps={{
                    placeholder: '+7 (___) ___-__-__',
                }}
            />
            <Input placeholder="Ваше имя" {...register('name')} {...getInputError('name')} />
            <Button type="submit" disabled={isButtonDisabled}>
                Записаться
            </Button>
        </Wrapper>
    );
};
