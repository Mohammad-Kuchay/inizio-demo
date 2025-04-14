import { DomainEvent, DomainEventRecord } from '@neudesic/inizio-ddd-utils';
import { UniqueEntityID } from '@neudesic/inizio-node-core';
import { IAccountClosedEventDomainEventProps } from './account_closed_event_domain_event_props';

const EVENT_TYPE = 'AccountClosedEventDomainEvent';
export class AccountClosedEventDomainEvent extends DomainEvent {
    data: IAccountClosedEventDomainEventProps;

    /**
     * Creates an instance of AccountClosedEventDomainEvent.
     * @param {IAccountClosedEventDomainEventProps} data
     * @memberof AccountClosedEventDomainEvent
     */
    private constructor(data: IAccountClosedEventDomainEventProps) {
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

    public static create(props: IAccountClosedEventDomainEventProps): AccountClosedEventDomainEvent {
        return new AccountClosedEventDomainEvent(props);
    }
}
