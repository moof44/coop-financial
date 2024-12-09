import { DepositType } from "./deposit.model";
import { LoanType } from "./loan.model";

export interface Collection{
    id: string,
    date: string | Date,
    orNo: string,
    memberId: string,
    memberName: string,
    paymentType: DepositType | LoanType,
    amount: number,
    remarks: string,
    userId: string,
    userName: string,
    approved: boolean,
}