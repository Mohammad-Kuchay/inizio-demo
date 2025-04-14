import { UniqueEntityID, Result } from '@neudesic/inizio-node-core';
import { AggregateRoot, Guard } from '@neudesic/inizio-ddd-utils';
import { ITransactionProps } from './transaction_props';

export class Transaction extends AggregateRoot<ITransactionProps> {
    public _transactionId: string;

    public _amount: number;

    public _transactionDate: string;

    private constructor(props: ITransactionProps, id?: UniqueEntityID) {
        super(id);
        this._transactionId = props.transactionId;
        this._amount = props.amount;
        this._transactionDate = props.transactionDate;
    }

    get transactionId(): string {
        return this._transactionId;
    }

    set transactionId(transactionId: string) {
        this._transactionId = transactionId;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(amount: number) {
        this._amount = amount;
    }

    get transactionDate(): string {
        return this._transactionDate;
    }

    set transactionDate(transactionDate: string) {
        this._transactionDate = transactionDate;
    }

    public static create(props: ITransactionProps, id?: UniqueEntityID): Result<Transaction> {
        const guard = Guard.againstNullOrUndefined(props, 'Props');
        if (!guard.succeeded) {
            return Result.fail(String(guard.message), 'INVALID_REQUEST');
        }
        return Result.ok(new Transaction(props, id));
    }
}
