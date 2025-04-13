import { TransactionType } from '../transaction_type';
/**
 * Interface for the Transaction aggregate. Contains the properties of Transaction
 *
 * @export
 * @interface ITransactionProps
 */
export interface ITransactionProps {
    transactionId: string;
    accountNumber: string;
    amount: number;
    transactionType: TransactionType;
    timestamp: Date;
}
