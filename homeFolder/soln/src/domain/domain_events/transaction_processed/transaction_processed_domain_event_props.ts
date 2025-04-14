import { TransactionTypeEnum } from '../transaction_type_enum';
/**
 * Interface for the TransactionProcessedDomainEvent DomainEvent. Contains the properties of TransactionProcessedDomainEvent
 *
 * @export
 * @interface ITransactionProcessedDomainEventProps
 */
export interface ITransactionProcessedDomainEventProps {
    id: string;
    transactionId: string;
    accountNumber: string;
    amount: number;
    transactionType: TransactionTypeEnum;
}
