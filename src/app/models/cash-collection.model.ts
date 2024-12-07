import { CashAllocation } from "./global.model";

export interface CashCollection {
    id: string,
    date: string | Date,
    time: string | Date,
    receivedFromId?: string,
    receivedFromName: string,
    cashAllocation: CashAllocation,
    collectionType: CollectionType,
    amount: number,
    remarks?:string,
    userId?: string,
    userName?: string,
}


export enum CollectionType{
    cashOnHand = 'Cash On Hand', // are these options where the money was received?
    cashInBank = 'Cash In Bank', // are these options where the money was received?
    loanReceivables = 'Loan Receivables', // for every loan payment
    savings = 'Savings', // for every entry of savings
    deposit = 'Savings Deposit', // for every entry of deposit
    timeDeposit = 'Time Deposit', // for every entry of time deposit
    shareCapital = 'Share Capital', // for every entry of share capital
    membershipFee = 'Membership Fee', // for every payment of membership fee
    interestOnLoan = 'Interest On Loan', // for every interest payment on loan payments
    loanPayable = 'Loan Payables', // ??
    koopPaluwagan = 'Koop Paluwagan', // for every deposit in Koop Paluwagan
    others = 'Others', // manual entry
}
