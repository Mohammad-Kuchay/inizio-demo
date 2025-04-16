import { DomainEvent, DomainEventRecord } from '@neudesic/inizio-ddd-utils';
import { UniqueEntityID } from '@neudesic/inizio-node-core';
import { IAccountCreditedDomainEventDomainEventProps } from './account_credited_domain_event_domain_event_props';

const EVENT_TYPE = 'AccountCreditedDomainEventDomainEvent';
export class AccountCreditedDomainEventDomainEvent extends DomainEvent {
    data: IAccountCreditedDomainEventDomainEventProps;

    /**
     * Creates an instance of AccountCreditedDomainEventDomainEvent.
     * @param {IAccountCreditedDomainEventDomainEventProps} data
     * @memberof AccountCreditedDomainEventDomainEvent
     */
    private constructor(data: IAccountCreditedDomainEventDomainEventProps) {
        super();
        this.data = data;
    }

    getAggregateId(): UniqueEntityID | undefined {
        return new UniqueEntityID(this.data.id);
    }

    flatten(): DomainEventRecord {
        return {
            id: this.id,
            dateTimeOccurred: this.dateTimeOccurred,
            eventType: EVENT_TYPE,
            data: JSON.stringify(this.data)
        };
    }

    public static create(props: IAccountCreditedDomainEventDomainEventProps): AccountCreditedDomainEventDomainEvent {
        return new AccountCreditedDomainEventDomainEvent(props);
    }
}
