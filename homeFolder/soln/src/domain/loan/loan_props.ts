import { LoanTypeEnum } from '../loan_type_enum';
/**
 * Interface for the Loan aggregate. Contains the properties of Loan
 *
 * @export
 * @interface ILoanProps
 */
export interface ILoanProps {
    loanId: string;
    loanType: LoanTypeEnum;
    amount: number;
    interestRate: number;
}
