import useSWR from 'swr';
import { City } from 'entities/City';
import { CITIES } from 'shared/const/apiRoutes';
import { apiClient } from 'shared/lib/api/client';

type Response = {
    cities: City[];
}

export const useCityList = () => {
    return useSWR(
        CITIES,
        async () => {
            const { data } = await apiClient.rest.get<Response>(CITIES);

            return data.cities;
        }
    )
}
