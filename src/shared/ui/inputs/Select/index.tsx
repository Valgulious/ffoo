import { forwardRef, Ref, useMemo } from 'react';
import ReactSelect, {
    Props as BaseSelectProps,
    SelectInstance,
    StylesConfig,
} from 'react-select';
import { useTheme } from '@emotion/react';
import type { Option as OptionInterface } from 'shared/types/option';
import {
    controlCss,
    placeholderCss,
    menuListCss,
    noOptionsCss,
    optionCss,
    Wrapper,
    Error,
} from './styles';

export type SelectOption<Key = string> = OptionInterface<Key>

export type SelectProps<
    Option = SelectOption,
    IsMulti extends boolean = false,
> = BaseSelectProps<Option, IsMulti> & {
    errorMessage?: string;
};

function SelectWitRef<
    Option = SelectOption,
    IsMulti extends boolean = false,
>(props: SelectProps<Option, IsMulti>, ref?: Ref<SelectInstance<Option, IsMulti>>) {
    const {
        isSearchable = true,
        components,
        placeholder = 'Выбрать...',
        errorMessage,
        ...restProps
    } = props;
    const theme = useTheme();
    const hasError = !!errorMessage;
    const customStyles: StylesConfig<Option, IsMulti> = useMemo(
        () => ({
            control: (_, { menuIsOpen, isFocused }) => ({
                ...controlCss(theme, menuIsOpen || isFocused, hasError),
            }),
            placeholder: (_, { isFocused }) => ({ ...placeholderCss(theme, hasError, isFocused) }),
            menuList: () => ({ ...menuListCss(theme) }),
            noOptionsMessage: () => ({ ...noOptionsCss }),
            option: (_, { isFocused, isSelected }) =>
                ({ ...optionCss(theme, isFocused, isSelected) }),
    }), [hasError]);

    return (
        <Wrapper>
            <ReactSelect<Option, IsMulti>
                ref={ref}
                unstyled
                styles={customStyles}
                components={{
                    IndicatorSeparator: undefined,
                    ClearIndicator: undefined,
                    ...components,
                }}
                isSearchable={isSearchable}
                placeholder={placeholder}
                noOptionsMessage={() => 'Нет опций'}
                blurInputOnSelect
                {...restProps}
            />
            {hasError && <Error>{errorMessage}</Error>}
        </Wrapper>
    )
}

export const Select = forwardRef(SelectWitRef);
