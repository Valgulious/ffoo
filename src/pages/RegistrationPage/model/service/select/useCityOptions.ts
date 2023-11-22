import type { Option } from 'shared/types/option';
import { useCityList } from 'pages/RegistrationPage/model/swr/useCityList';

const DEFAULT_OPTION_LABEL = 'Владивосток';

type ReturnType = {
    options: Option[];
    defaultOption?: Option;
}

export const useCityOptions = (): ReturnType => {
    const { data: cityList } = useCityList();

    if (cityList && cityList.length > 0) {
        const options = cityList.map(({ id, name }) => ({
            value: id,
            label: name,
        }));
        const defaultOption = options.find(({ label }) => label === DEFAULT_OPTION_LABEL);

        return {
            options,
            defaultOption
        };
    }

    return {
        options: [],
    };
};
