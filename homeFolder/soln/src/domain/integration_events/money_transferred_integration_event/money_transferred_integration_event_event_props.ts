/**
 * Interface for the MoneyTransferredIntegrationEventIntegrationEvent IntegrationEvent. Contains the properties of MoneyTransferredIntegrationEventDomainEvent
 *
 * @export
 * @interface IMoneyTransferredIntegrationEventIntegrationEventProps
 */
export interface IMoneyTransferredIntegrationEventIntegrationEventProps {
    id: string;
    senderAccount: string;
    receiverAccount: string;
    amount: number;
}
