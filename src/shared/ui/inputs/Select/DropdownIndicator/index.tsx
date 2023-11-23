import type { DropdownIndicatorProps } from 'react-select';
import { Icon } from './styles';

export function DropdownIndicator<Option, IsMulti extends boolean>(
    props: DropdownIndicatorProps<Option, IsMulti>,
) {
    const { selectProps } = props;
    const { menuIsOpen } = selectProps;

    return (
        <Icon width={32} isMenuOpen={menuIsOpen} />
    );
}
