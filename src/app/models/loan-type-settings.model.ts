import { LoanType } from "./loan.model";

export interface LoanTypeSettings{
    id: string,
    loanType: LoanType
    processingFee: boolean,
    serviceFee: boolean,
    mutualBenefitFund: boolean,
    notarialFee: boolean,
    shareCapital: boolean,
    membershipFee: boolean,
    lgf: boolean,
    raffle: boolean,
    rfCbu: boolean,
    others: boolean,
    userId: string,
    userName: string,
}