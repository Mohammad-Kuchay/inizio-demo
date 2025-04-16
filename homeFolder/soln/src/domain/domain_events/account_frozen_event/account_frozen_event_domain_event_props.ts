/**
 * Interface for the AccountFrozenEventDomainEvent DomainEvent. Contains the properties of AccountFrozenEventDomainEvent
 *
 * @export
 * @interface IAccountFrozenEventDomainEventProps
 */
export interface IAccountFrozenEventDomainEventProps {
    id: string;
    accountNumber: string;
    reason?: string;
    dateFrozen: Date;
}
