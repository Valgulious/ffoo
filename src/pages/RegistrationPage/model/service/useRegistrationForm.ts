import { useForm, UseFormProps } from 'react-hook-form';
import type { RegistrationForm, RegistrationFormSubmitHandler } from 'pages/RegistrationPage/model/types/form.ts';
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
    } = useForm<RegistrationForm>(useFormProps);
    const { errors, isValid } = formState;
    const getInputError = useInputErrors(errors);

    return {
        register,
        getInputError,
        control,
        watch,
        isValid,
        onSubmit: handleSubmit((data) => onSubmit(data, { reset })),
    }
}
