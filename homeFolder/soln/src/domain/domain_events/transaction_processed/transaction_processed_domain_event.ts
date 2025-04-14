import { DomainEvent, DomainEventRecord } from '@neudesic/inizio-ddd-utils';
import { UniqueEntityID } from '@neudesic/inizio-node-core';
import { ITransactionProcessedDomainEventProps } from './transaction_processed_domain_event_props';

const EVENT_TYPE = 'TransactionProcessedDomainEvent';
export class TransactionProcessedDomainEvent extends DomainEvent {
    data: ITransactionProcessedDomainEventProps;

    /**
     * Creates an instance of TransactionProcessedDomainEvent.
     * @param {ITransactionProcessedDomainEventProps} data
     * @memberof TransactionProcessedDomainEvent
     */
    private constructor(data: ITransactionProcessedDomainEventProps) {
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

    public static create(props: ITransactionProcessedDomainEventProps): TransactionProcessedDomainEvent {
        return new TransactionProcessedDomainEvent(props);
    }
}
