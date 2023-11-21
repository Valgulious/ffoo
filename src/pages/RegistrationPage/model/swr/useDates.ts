import useSWR from 'swr';
import { DATES } from 'shared/const/apiRoutes';
import { apiClient } from 'shared/lib/api/client';
import type { Date, Time } from 'entities/Date';

type Response = {
    data: Date;
};

type DateRecord = Record<string, Time[]>;

export const useDates = (cityId?: string) => {
    return useSWR(cityId ?? false, async () => {
        if (cityId) {
            const {
                data: { data },
            } = await apiClient.rest.get<Response>(DATES(cityId));
            const dates: DateRecord = {};

            Object.entries(data).forEach(([date, value]) => {
                const times = Object.values(value).filter(({ isBooked }) => !isBooked);

                if (times.length > 0) {
                    dates[date] = times;
                }
            });

            if (Object.keys(dates).length > 0) {
                return dates;
            }

            return undefined;
        }

        return undefined;
    });
};
