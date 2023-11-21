import type { Nullable } from 'shared/types/utility';
import type { City } from 'entities/City';
import { useCityList } from 'pages/RegistrationPage/model/swr/useCityList';

export const useCity = (cityId?: string): Nullable<City> => {
    const { data: cityList } = useCityList();

    if (!cityId) {
        return null;
    }

    return cityList?.find(({ id }) => id === cityId);
};
