import { useForm, UseFormProps } from 'react-hook-form';
import type { RegistrationForm, RegistrationFormSubmitHandler } from 'pages/RegistrationPage/model/types/form';
import { useInputErrors } from 'shared/hooks/form/useInputErrors';

export type UseRegistrationFormProps = UseFormProps<RegistrationForm> & {
    onSubmit: RegistrationFormSubmitHandler;
}

export const useRegistrationForm = (props: UseRegistrationFormProps) => {
    const { onSubmit, ...useFormProps } = props;
    const {
        register,
        handleSubmit,
        formState,
        control,
        watch,
        reset,
        setValue,
    } = useForm<RegistrationForm>(useFormProps);
    const { errors, isValid } = formState;
    const getInputError = useInputErrors(errors);

    return {
        register,
        getInputError,
        control,
        watch,
        isValid,
        setValue,
        onSubmit: handleSubmit((data) => onSubmit(data, { reset })),
    }
}
