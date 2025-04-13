import { UniqueEntityID, Result } from '@neudesic/inizio-node-core';
import { AggregateRoot, Guard } from '@neudesic/inizio-ddd-utils';
import { TransactionType } from '../transaction_type';
import { ITransactionProps } from './transaction_props';

export class Transaction extends AggregateRoot<ITransactionProps> {
    public _transactionId: string;

    public _accountNumber: string;

    public _amount: number;

    public _transactionType: TransactionType;

    public _timestamp: Date;

    private constructor(props: ITransactionProps, id?: UniqueEntityID) {
        super(id);
        this._transactionId = props.transactionId;
        this._accountNumber = props.accountNumber;
        this._amount = props.amount;
        this._transactionType = props.transactionType;
        this._timestamp = props.timestamp;
    }

    get transactionId(): string {
        return this._transactionId;
    }

    set transactionId(transactionId: string) {
        this._transactionId = transactionId;
    }

    get accountNumber(): string {
        return this._accountNumber;
    }

    set accountNumber(accountNumber: string) {
        this._accountNumber = accountNumber;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(amount: number) {
        this._amount = amount;
    }

    get transactionType(): TransactionType {
        return this._transactionType;
    }

    set transactionType(transactionType: TransactionType) {
        this._transactionType = transactionType;
    }

    get timestamp(): Date {
        return this._timestamp;
    }

    set timestamp(timestamp: Date) {
        this._timestamp = timestamp;
    }

    public static create(props: ITransactionProps, id?: UniqueEntityID): Result<Transaction> {
        const guard = Guard.againstNullOrUndefined(props, 'Props');
        if (!guard.succeeded) {
            return Result.fail(String(guard.message), 'INVALID_REQUEST');
        }
        return Result.ok(new Transaction(props, id));
    }
}
