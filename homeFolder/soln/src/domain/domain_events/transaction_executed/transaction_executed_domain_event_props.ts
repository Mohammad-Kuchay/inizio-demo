/**
 * Interface for the TransactionExecutedDomainEvent DomainEvent. Contains the properties of TransactionExecutedDomainEvent
 *
 * @export
 * @interface ITransactionExecutedDomainEventProps
 */
export interface ITransactionExecutedDomainEventProps {
    id: string;
    transactionId: string;
    accountNumber: string;
}
