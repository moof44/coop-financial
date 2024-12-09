export interface Deposit{
    id: string,
    memberId: string,
    memberName: string,
    depositType: DepositType,
    dateStarted: string | Date,
    balance: number,
    interestEarned: number,
    lastTransaction: string|Date,
}


// this could be for savings... hmm... let's see
export interface DepositTransaction{ // this is transaction
    id: string,
    depositId: string,
    transactionType: DepositTransactionType,
    date: string | Date,
    time: string | Date,
    orNumber?: string,
    prevBalance: number,
    amount: number,
    interest: number,
    balance: number,
    userId: string,
    userName: string,
    remark?: string,
}

export enum DepositType {
    savings = 'Savings',
    timeDeposit = 'Time Deposit',
    specialDeposit = 'Special Deposit',
    koopPaluwagan = 'Koop Paluwagan',
    pensionSavings = 'Pension Savings',
    kiddieSavers = 'Kiddie Savers',
    emergencyFund = 'Emergency Fund',
    shares = 'Shares Deposit',
    mutualBenefits = 'Mutual Benefits Fund / Damayan',
    others = 'Others',
}

export enum DepositTransactionType {
    deposit = 'Deposit',
    withdraw = 'Withdraw',
    interest = 'Interest',
}