import { DomainEvent, DomainEventRecord } from '@neudesic/inizio-ddd-utils';
import { UniqueEntityID } from '@neudesic/inizio-node-core';
import { IAccountDebitedEventDomainEventProps } from './account_debited_event_domain_event_props';

const EVENT_TYPE = 'AccountDebitedEventDomainEvent';
export class AccountDebitedEventDomainEvent extends DomainEvent {
    data: IAccountDebitedEventDomainEventProps;

    /**
     * Creates an instance of AccountDebitedEventDomainEvent.
     * @param {IAccountDebitedEventDomainEventProps} data
     * @memberof AccountDebitedEventDomainEvent
     */
    private constructor(data: IAccountDebitedEventDomainEventProps) {
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

    public static create(props: IAccountDebitedEventDomainEventProps): AccountDebitedEventDomainEvent {
        return new AccountDebitedEventDomainEvent(props);
    }
}
