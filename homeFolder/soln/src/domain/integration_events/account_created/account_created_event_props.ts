/**
 * Interface for the AccountCreatedIntegrationEvent IntegrationEvent. Contains the properties of AccountCreatedDomainEvent
 *
 * @export
 * @interface IAccountCreatedIntegrationEventProps
 */
export interface IAccountCreatedIntegrationEventProps {
    id: string;
    accountId: string;
    accountHolderName: string;
}
