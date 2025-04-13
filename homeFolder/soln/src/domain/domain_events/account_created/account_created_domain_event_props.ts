/**
 * Interface for the AccountCreatedDomainEvent DomainEvent. Contains the properties of AccountCreatedDomainEvent
 *
 * @export
 * @interface IAccountCreatedDomainEventProps
 */
export interface IAccountCreatedDomainEventProps {
    id: string;
    accountNumber: string;
    holderName: string;
}
