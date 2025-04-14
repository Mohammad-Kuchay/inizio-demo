/**
 * Interface for the AccountDeactivatedEventIntegrationEvent IntegrationEvent. Contains the properties of AccountDeactivatedEventDomainEvent
 *
 * @export
 * @interface IAccountDeactivatedEventIntegrationEventProps
 */
export interface IAccountDeactivatedEventIntegrationEventProps {
    id: string;
    accountNumber: string;
    reason: string;
}
