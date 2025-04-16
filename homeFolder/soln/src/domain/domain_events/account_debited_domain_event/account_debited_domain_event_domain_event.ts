import { DomainEvent, DomainEventRecord } from '@neudesic/inizio-ddd-utils';
import { UniqueEntityID } from '@neudesic/inizio-node-core';
import { IAccountDebitedDomainEventDomainEventProps } from './account_debited_domain_event_domain_event_props';

const EVENT_TYPE = 'AccountDebitedDomainEventDomainEvent';
export class AccountDebitedDomainEventDomainEvent extends DomainEvent {
    data: IAccountDebitedDomainEventDomainEventProps;

    /**
     * Creates an instance of AccountDebitedDomainEventDomainEvent.
     * @param {IAccountDebitedDomainEventDomainEventProps} data
     * @memberof AccountDebitedDomainEventDomainEvent
     */
    private constructor(data: IAccountDebitedDomainEventDomainEventProps) {
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

    public static create(props: IAccountDebitedDomainEventDomainEventProps): AccountDebitedDomainEventDomainEvent {
        return new AccountDebitedDomainEventDomainEvent(props);
    }
}
