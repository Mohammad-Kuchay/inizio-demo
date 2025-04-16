import { TransactionTypeEnum } from '../transaction_type_enum';
/**
 * Interface for the TransactionProcessedIntegrationEventIntegrationEvent IntegrationEvent. Contains the properties of TransactionProcessedIntegrationEventDomainEvent
 *
 * @export
 * @interface ITransactionProcessedIntegrationEventIntegrationEventProps
 */
export interface ITransactionProcessedIntegrationEventIntegrationEventProps {
    id: string;
    transactionId: string;
    accountId: string;
    amount: number;
    type: TransactionTypeEnum;
}
