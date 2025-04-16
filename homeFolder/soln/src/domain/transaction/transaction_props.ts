import { TransactionTypeEnum } from '../transaction_type_enum';
import { Account } from '../account';
/**
 * Interface for the Transaction aggregate. Contains the properties of Transaction
 *
 * @export
 * @interface ITransactionProps
 */
export interface ITransactionProps {
    transactionId: string;
    amount: number;
    transactionType: TransactionTypeEnum;
    transactionDate: Date;
    relatedAccount: Account;
}
