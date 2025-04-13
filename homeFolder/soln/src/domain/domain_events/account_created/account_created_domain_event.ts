import { DomainEvent, DomainEventRecord } from '@neudesic/inizio-ddd-utils';
import { UniqueEntityID } from '@neudesic/inizio-node-core';
import { IAccountCreatedDomainEventProps } from './account_created_domain_event_props';

const EVENT_TYPE = 'AccountCreatedDomainEvent';
export class AccountCreatedDomainEvent extends DomainEvent {
    data: IAccountCreatedDomainEventProps;

    /**
     * Creates an instance of AccountCreatedDomainEvent.
     * @param {IAccountCreatedDomainEventProps} data
     * @memberof AccountCreatedDomainEvent
     */
    private constructor(data: IAccountCreatedDomainEventProps) {
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

    public static create(props: IAccountCreatedDomainEventProps): AccountCreatedDomainEvent {
        return new AccountCreatedDomainEvent(props);
    }
}
