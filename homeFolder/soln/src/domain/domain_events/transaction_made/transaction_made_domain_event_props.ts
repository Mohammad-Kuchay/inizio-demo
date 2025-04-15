/**
 * Interface for the TransactionMadeDomainEvent DomainEvent. Contains the properties of TransactionMadeDomainEvent
 *
 * @export
 * @interface ITransactionMadeDomainEventProps
 */
export interface ITransactionMadeDomainEventProps {
    id: string;
    transactionId: string;
    amount: number;
    accountNumber: string;
}
