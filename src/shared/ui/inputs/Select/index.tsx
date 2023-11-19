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
} from './styles';

type SelectOption<Key = string> = OptionInterface<Key>

export type SelectProps<
    Option = SelectOption,
    IsMulti extends boolean = false,
> = BaseSelectProps<Option, IsMulti>;

function SelectWitRef<
    Option = SelectOption,
    IsMulti extends boolean = false,
>(props: SelectProps<Option, IsMulti>, ref?: Ref<SelectInstance<Option, IsMulti>>) {
    const {
        isSearchable = true,
        components,
        placeholder = 'Выбрать...',
        ...restProps
    } = props;
    const theme = useTheme();
    const customStyles: StylesConfig<Option, IsMulti> = useMemo(
        () => ({
            control: (baseCss, { menuIsOpen, isFocused }) => ({
                ...baseCss,
                ...controlCss(theme, menuIsOpen || isFocused),
            }),
            placeholder: (baseCss) => ({ ...baseCss, ...placeholderCss(theme) }),
            menuList: (baseCss) => ({ ...baseCss, ...menuListCss(theme) }),
            noOptionsMessage: (baseCss) => ({ ...baseCss, ...noOptionsCss }),
            option: (baseCss, { isFocused, isSelected }) =>
                ({ ...baseCss, ...optionCss(theme, isFocused, isSelected) }),
    }), []);

    return (
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
            {...restProps}
        />
    )
}

export const Select = forwardRef(SelectWitRef);
