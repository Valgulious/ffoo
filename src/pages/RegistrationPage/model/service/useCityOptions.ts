import { useCityList } from 'pages/RegistrationPage/model/swr/useCityList.ts';
import { Option } from 'shared/types/option.ts';

export const useCityOptions = (): Option[] => {
    const { data: cityList } = useCityList();

    if (cityList && cityList.length > 0) {
        return cityList.map(({ id,  name}) => ({
            value: id,
            label: name,
        }));
    }

    return [];
}
