import useSWR from 'swr';
import dayjs from 'dayjs';
import { DATES } from 'shared/const/apiRoutes';
import { DATE_WITH_TIME } from 'shared/const/dateFormat';
import { apiClient } from 'shared/lib/api/client';
import type { Date, Time } from 'entities/Date';

type Response = {
    data: Date;
};

type DateRecord = Record<string, Time[]>;

export const useDateList = (cityId?: string) => {
    return useSWR(cityId ?? false, async () => {
        if (cityId) {
            const {
                data: { data },
            } = await apiClient.rest.get<Response>(DATES(cityId));
            const currentDate = dayjs().format(DATE_WITH_TIME);
            const dateRecord: DateRecord = {};

            Object.entries(data).forEach(([date, value]) => {
                const times = Object.values(value).filter(({ isBooked, date }) =>
                    !isBooked && date > currentDate);

                if (times.length > 0) {
                    dateRecord[date] = times;
                }
            });

            if (Object.keys(dateRecord).length > 0) {
                return dateRecord;
            }

            return undefined;
        }

        return undefined;
    });
};
