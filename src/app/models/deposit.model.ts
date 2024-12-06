export interface Deposit{
    id: string,
    memberId: string,
    memberName: string,
    balance: number,
    interestEarned: number,
    lastTransaction: string|Date,
}


export interface DepositTransaction{ // this is transaction
    id: string,
    depositId: string,
    transactionType: string,
    date: string | Date,
    time: string | Date,
    orNumber: string,
    prevBalance: number,
    amount: number,
    interest: number,
    balance: number,
    userId: string,
}