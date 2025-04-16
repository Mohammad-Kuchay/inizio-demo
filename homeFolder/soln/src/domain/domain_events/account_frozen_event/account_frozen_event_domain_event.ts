import { DomainEvent, DomainEventRecord } from '@neudesic/inizio-ddd-utils';
import { UniqueEntityID } from '@neudesic/inizio-node-core';
import { IAccountFrozenEventDomainEventProps } from './account_frozen_event_domain_event_props';

const EVENT_TYPE = 'AccountFrozenEventDomainEvent';
export class AccountFrozenEventDomainEvent extends DomainEvent {
    data: IAccountFrozenEventDomainEventProps;

    /**
     * Creates an instance of AccountFrozenEventDomainEvent.
     * @param {IAccountFrozenEventDomainEventProps} data
     * @memberof AccountFrozenEventDomainEvent
     */
    private constructor(data: IAccountFrozenEventDomainEventProps) {
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

    public static create(props: IAccountFrozenEventDomainEventProps): AccountFrozenEventDomainEvent {
        return new AccountFrozenEventDomainEvent(props);
    }
}
