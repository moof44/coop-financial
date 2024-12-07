import { CashAllocation } from "./global.model";

export interface CashDisbursement{
    id: string,
    date: string | Date,
    time: string | Date,
    paidToId?: string,
    paidToName: string,
    cashAllocation: CashAllocation,
    disbursementType: CashDisbursementType
    remarks?: string, // may include breakdown for some disbursement
    userId?: string,
    userName?: string,
}

// need to know the triggers for these
export enum CashDisbursementType {
    savings = 'Savings', // for every savings withdrawal
    deposit = 'Deposit', // for every deposit withdrawal
    timeDeposit = 'Time Deposit', // for every timeDeposit withdrawal
    loanReceivables = 'Loan Receivables', // ??
    shareCapital = 'Share Capital', // for every shareCapital withdrawal
    serviceFee = 'Service Fee', // ??
    mutualBenefit = 'Mutual Benefit Funds', // for every MBF withdrawal
    utility = 'Electricity and Water', // manual entry
    communication = 'Communication Expense', // manual entry
    loansPayable = 'Loans Payable', // ?
    others = 'Others' // manual entry
}