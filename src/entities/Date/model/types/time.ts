export interface Time {
    day: string;
    begin: string;
    end: string;
    date: string;
    isBooked: string;
}

export type Times = { [key: string]: Time };
