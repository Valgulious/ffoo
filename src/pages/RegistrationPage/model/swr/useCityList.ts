import useSWR from 'swr';
import { CITIES } from 'shared/const/apiRoutes';
import { apiClient } from 'shared/lib/api/client';
import { City } from 'entities/City';

type Response = {
    cities: City[];
};

export const useCityList = () => {
    return useSWR(CITIES, async () => {
        const { data } = await apiClient.rest.get<Response>(CITIES);

        return data.cities;
    });
};
