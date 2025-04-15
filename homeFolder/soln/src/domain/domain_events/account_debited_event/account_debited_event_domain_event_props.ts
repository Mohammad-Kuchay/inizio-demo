/**
 * Interface for the AccountDebitedEventDomainEvent DomainEvent. Contains the properties of AccountDebitedEventDomainEvent
 *
 * @export
 * @interface IAccountDebitedEventDomainEventProps
 */
export interface IAccountDebitedEventDomainEventProps {
    id: string;
    accountNumber: string;
    amount: number;
}
