import { FC } from 'react';
import type { RegistrationFormSubmitHandler } from './model/types/from';
import { Form } from './ui/Form';
import { Wrapper } from './styles';

export const RegistrationPage: FC = () => {
    const handleSubmit: RegistrationFormSubmitHandler = (formData) => {
        console.log({ formData })
    }
    
    return (
        <Wrapper>
            <p>ffoo</p>
            <p>Онлайн запись</p>
            <Form
                onSubmit={handleSubmit}
                isSubmitting={false}
            />
        </Wrapper>
    );
};
