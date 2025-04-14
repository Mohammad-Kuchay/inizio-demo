/**
 * Interface for the AccountCreatedEventDomainEvent DomainEvent. Contains the properties of AccountCreatedEventDomainEvent
 *
 * @export
 * @interface IAccountCreatedEventDomainEventProps
 */
export interface IAccountCreatedEventDomainEventProps {
    id: string;
    accountId: string;
    createdDate: Date;
}
