import { useCityList } from 'pages/RegistrationPage/model/swr/useCityList.ts';
import { Nullable } from 'shared/types/utility';
import { City } from 'entities/City';

export const useCity = (cityId?: string): Nullable<City> => {
    const { data: cityList } = useCityList();

    if (!cityId) {
        return null;
    }

    return cityList?.find(({ id }) => id === cityId);
}
