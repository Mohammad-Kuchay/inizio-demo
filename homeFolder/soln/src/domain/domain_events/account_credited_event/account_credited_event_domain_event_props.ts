/**
 * Interface for the AccountCreditedEventDomainEvent DomainEvent. Contains the properties of AccountCreditedEventDomainEvent
 *
 * @export
 * @interface IAccountCreditedEventDomainEventProps
 */
export interface IAccountCreditedEventDomainEventProps {
    id: string;
    accountNumber: string;
    amount: number;
}
