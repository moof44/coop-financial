import { Loan, LoanTransaction, LoanTransactionType, LoanType } from "./loan.model";

export const loans: Loan[] = [
    {
      id: 'loan_001',
      memberId: 'mbr_123',
      memberName: 'John Doe',
      loanType: LoanType.privilege,
      dateStarted: new Date('2024-10-01'),
      balance: 5000,
      lastTransaction: new Date('2024-11-15'),
      duration: '3 months', 
      dueDate: new Date('2025-01-01'), 
      coMakerId: 'mbr_456',
      coMakerName: 'Jane Smith',
    },
    {
      id: 'loan_002',
      memberId: 'mbr_789',
      memberName: 'Alice Johnson',
      loanType: LoanType.productive,
      dateStarted: new Date('2024-11-05'),
      balance: 10000,
      lastTransaction: new Date('2024-12-01'),
      duration: '6 months', 
      dueDate: new Date('2025-05-05'), 
      coMakerId: 'mbr_101',
      coMakerName: 'Bob Williams',
    },
    // ... (Add more loans for other loan types)
  ];
  
  export const loanTransactions: LoanTransaction[] = [
    // Transactions for loan_001 (Privilege Loan)
    {
      id: 'lt_001',
      loanId: 'loan_001',
      transactionType: LoanTransactionType.loan,
      date: new Date('2024-10-01'),
      time: '10:00 AM',
      orNumber: 'OR123',
      prevBalance: 0,
      amount: 10000,
      fines: 0,
      interest: 0,
      userId: 'user_001',
      userName: 'Admin User',
    },
    {
      id: 'lt_002',
      loanId: 'loan_001',
      transactionType: LoanTransactionType.payment,
      date: new Date('2024-10-15'),
      time: '03:15 PM',
      orNumber: 'OR456',
      prevBalance: 10000,
      amount: -2000,
      fines: 0,
      interest: 0,
      userId: 'user_002',
      userName: 'Cashier',
    },
    {
      id: 'lt_003',
      loanId: 'loan_001',
      transactionType: LoanTransactionType.interest,
      date: new Date('2024-11-01'),
      time: '12:00 AM', 
      prevBalance: 8000,
      amount: 0, 
      fines: 0,
      interest: 200, 
      userId: 'system',
      userName: 'System',
    },
    // ... (Add more transactions for loan_001)
  ];