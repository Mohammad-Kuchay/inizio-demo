import { Result } from '@neudesic/inizio-node-core';
import { ValueObject, Guard } from '@neudesic/inizio-ddd-utils';
import { TransactionTypeEnum } from '../transaction_type_enum';
import { ITransactionProps } from './transaction_props';

export class Transaction extends ValueObject<ITransactionProps> {
    private constructor(props: ITransactionProps) {
        super(props);
    }

    get transactionId(): string {
        return this.props.transactionId;
    }

    set transactionId(transactionId: string) {
        this.props.transactionId = transactionId;
    }

    get timestamp(): Date {
        return this.props.timestamp;
    }

    set timestamp(timestamp: Date) {
        this.props.timestamp = timestamp;
    }

    get amount(): number {
        return this.props.amount;
    }

    set amount(amount: number) {
        this.props.amount = amount;
    }

    get description(): string {
        return this.props.description;
    }

    set description(description: string) {
        this.props.description = description;
    }

    get transactionType(): TransactionTypeEnum {
        return this.props.transactionType;
    }

    set transactionType(transactionType: TransactionTypeEnum) {
        this.props.transactionType = transactionType;
    }

    public static create(props: ITransactionProps): Result<Transaction> {
        const guard = Guard.againstNullOrUndefined(props, 'Props');
        if (!guard.succeeded) {
            return Result.fail(String(guard.message), 'INVALID_REQUEST');
        }
        return Result.ok(new Transaction(props));
    }
}
