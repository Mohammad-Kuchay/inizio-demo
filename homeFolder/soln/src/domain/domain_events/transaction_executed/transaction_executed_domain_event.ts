import { DomainEvent, DomainEventRecord } from '@neudesic/inizio-ddd-utils';
import { UniqueEntityID } from '@neudesic/inizio-node-core';
import { ITransactionExecutedDomainEventProps } from './transaction_executed_domain_event_props';

const EVENT_TYPE = 'TransactionExecutedDomainEvent';
export class TransactionExecutedDomainEvent extends DomainEvent {
    data: ITransactionExecutedDomainEventProps;

    /**
     * Creates an instance of TransactionExecutedDomainEvent.
     * @param {ITransactionExecutedDomainEventProps} data
     * @memberof TransactionExecutedDomainEvent
     */
    private constructor(data: ITransactionExecutedDomainEventProps) {
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

    public static create(props: ITransactionExecutedDomainEventProps): TransactionExecutedDomainEvent {
        return new TransactionExecutedDomainEvent(props);
    }
}
