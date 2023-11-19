import { FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from 'shared/ui/inputs/Input';
import { PatternFormatInput } from 'shared/ui/inputs/PatternFormatInput';
import { Select } from 'shared/ui/controlled/Select';
import type { RegistrationForm } from 'pages/RegistrationPage/model/types/from';
import { useRegistrationForm, UseRegistrationFormProps } from 'pages/RegistrationPage/model/service/useRegistrationForm';
import { registrationFormValidationSchema } from 'pages/RegistrationPage/model/validation/registrationFormValidationSchema';
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
    } = useRegistrationForm({
        mode: 'all',
        resolver: zodResolver(registrationFormValidationSchema),
        ...formProps,
    })
    const isButtonDisabled = !isValid || isSubmitting;

    return (
        <Wrapper onSubmit={onSubmit}>
            <Select<RegistrationForm>
                placeholder="Город"
                name="city"
                control={control}
                {...getInputError('city')}
            />
            <SplitInputsContainer>
                <Select<RegistrationForm>
                    placeholder="Дата"
                    name="date"
                    control={control}
                    {...getInputError('date')}
                />
                <Select<RegistrationForm>
                    placeholder="Время"
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
