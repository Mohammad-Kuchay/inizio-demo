/**
 * Interface for the TransactionProcessedEventIntegrationEvent IntegrationEvent. Contains the properties of TransactionProcessedEventDomainEvent
 *
 * @export
 * @interface ITransactionProcessedEventIntegrationEventProps
 */
export interface ITransactionProcessedEventIntegrationEventProps {
    id: string;
    transactionId: string;
    amount: number;
    accountNumber: string;
}
