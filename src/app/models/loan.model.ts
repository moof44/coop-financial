export interface Loan{
    id: string,
    memberId: string,
    memberName: string,
    loanType: LoanType,
    dateStarted: string | Date,
    balance: number,
    lastTransaction: string | Date,
    duration: string | Date,
    dueDate: string | Date,
    coMakerId: string,
    coMakerName: string,
}

export interface LoanTransaction {
    id: string,
    loanId: string,
    transactionType: LoanTransactionType,
    date: string | Date,
    time: string | Date,
    orNumber?:string,
    prevBalance: number,
    amount: number,
    fines: number,
    interest: number,
    userId: string,
    userName: string,
}


export enum LoanType{
    privilege = 'Privilege Loan',
    productive = 'Productive Loan',
    provident = 'Provident Loan',
    emergency = 'Emergency Loan',
    quick = 'Quick Loan',
    educational = 'Educational Loan',
    special = 'Special Loan',
    ebike = 'E-Bike Loan',
}

export enum LoanTransactionType{
    loan = 'Loan',
    payment = 'Payment',
    interest = 'Interest',
}