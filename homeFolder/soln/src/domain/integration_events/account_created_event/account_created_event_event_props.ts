/**
 * Interface for the AccountCreatedEventIntegrationEvent IntegrationEvent. Contains the properties of AccountCreatedEventDomainEvent
 *
 * @export
 * @interface IAccountCreatedEventIntegrationEventProps
 */
export interface IAccountCreatedEventIntegrationEventProps {
    id: string;
    accountNumber: string;
    ownerName: string;
}
