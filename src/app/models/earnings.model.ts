export interface Earnings{
    id: string,
    source: string,
    type: string,
    amount: number,
    date: string | Date,
    time: string | Date,
    userId: string | null,
    userName: string,
}