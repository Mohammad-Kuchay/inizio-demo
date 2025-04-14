import { DomainEvent, DomainEventRecord } from '@neudesic/inizio-ddd-utils';
import { UniqueEntityID } from '@neudesic/inizio-node-core';
import { IAccountCreatedEventDomainEventProps } from './account_created_event_domain_event_props';

const EVENT_TYPE = 'AccountCreatedEventDomainEvent';
export class AccountCreatedEventDomainEvent extends DomainEvent {
    data: IAccountCreatedEventDomainEventProps;

    /**
     * Creates an instance of AccountCreatedEventDomainEvent.
     * @param {IAccountCreatedEventDomainEventProps} data
     * @memberof AccountCreatedEventDomainEvent
     */
    private constructor(data: IAccountCreatedEventDomainEventProps) {
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

    public static create(props: IAccountCreatedEventDomainEventProps): AccountCreatedEventDomainEvent {
        return new AccountCreatedEventDomainEvent(props);
    }
}
