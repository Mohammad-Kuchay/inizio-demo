/**
 * Interface for the AccountBalanceUpdatedEventIntegrationEvent IntegrationEvent. Contains the properties of AccountBalanceUpdatedEventDomainEvent
 *
 * @export
 * @interface IAccountBalanceUpdatedEventIntegrationEventProps
 */
export interface IAccountBalanceUpdatedEventIntegrationEventProps {
    id: string;
    accountId: string;
    newBalance: number;
}
