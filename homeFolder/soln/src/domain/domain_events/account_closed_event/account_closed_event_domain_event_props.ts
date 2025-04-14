/**
 * Interface for the AccountClosedEventDomainEvent DomainEvent. Contains the properties of AccountClosedEventDomainEvent
 *
 * @export
 * @interface IAccountClosedEventDomainEventProps
 */
export interface IAccountClosedEventDomainEventProps {
    id: string;
    accountId: string;
    closedDate: Date;
}
