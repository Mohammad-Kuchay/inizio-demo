import { TransactionTypeEnum } from '../transaction_type_enum';
/**
 * Interface for the Transaction value object. Contains the properties of Transaction
 *
 * @export
 * @interface ITransactionProps
 */
export interface ITransactionProps {
    transactionId: string;
    timestamp: Date;
    amount: number;
    description: string;
    transactionType: TransactionTypeEnum;
}
