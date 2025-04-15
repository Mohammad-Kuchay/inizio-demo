import { DomainEvent, DomainEventRecord } from '@neudesic/inizio-ddd-utils';
import { UniqueEntityID } from '@neudesic/inizio-node-core';
import { ITransactionMadeDomainEventProps } from './transaction_made_domain_event_props';

const EVENT_TYPE = 'TransactionMadeDomainEvent';
export class TransactionMadeDomainEvent extends DomainEvent {
    data: ITransactionMadeDomainEventProps;

    /**
     * Creates an instance of TransactionMadeDomainEvent.
     * @param {ITransactionMadeDomainEventProps} data
     * @memberof TransactionMadeDomainEvent
     */
    private constructor(data: ITransactionMadeDomainEventProps) {
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

    public static create(props: ITransactionMadeDomainEventProps): TransactionMadeDomainEvent {
        return new TransactionMadeDomainEvent(props);
    }
}
