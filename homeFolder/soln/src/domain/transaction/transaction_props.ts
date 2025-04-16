import { TransactionTypeEnum } from '../transaction_type_enum';
/**
 * Interface for the Transaction entity. Contains the properties of Transaction
 *
 * @export
 * @interface ITransactionProps
 */
export interface ITransactionProps {
    transactionId: string;
    amount: number;
    transactionType: TransactionTypeEnum;
    date: Date;
}
