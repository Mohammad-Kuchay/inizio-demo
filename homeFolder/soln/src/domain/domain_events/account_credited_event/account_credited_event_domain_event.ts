import { DomainEvent, DomainEventRecord } from '@neudesic/inizio-ddd-utils';
import { UniqueEntityID } from '@neudesic/inizio-node-core';
import { IAccountCreditedEventDomainEventProps } from './account_credited_event_domain_event_props';

const EVENT_TYPE = 'AccountCreditedEventDomainEvent';
export class AccountCreditedEventDomainEvent extends DomainEvent {
    data: IAccountCreditedEventDomainEventProps;

    /**
     * Creates an instance of AccountCreditedEventDomainEvent.
     * @param {IAccountCreditedEventDomainEventProps} data
     * @memberof AccountCreditedEventDomainEvent
     */
    private constructor(data: IAccountCreditedEventDomainEventProps) {
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

    public static create(props: IAccountCreditedEventDomainEventProps): AccountCreditedEventDomainEvent {
        return new AccountCreditedEventDomainEvent(props);
    }
}
