import { UniqueEntityID, Result } from '@neudesic/inizio-node-core';
import { Entity, Guard } from '@neudesic/inizio-ddd-utils';
import { TransactionTypeEnum } from '../transaction_type_enum';
import { ITransactionProps } from './transaction_props';

export class Transaction extends Entity<ITransactionProps> {
    public _transactionId: string;

    public _amount: number;

    public _transactionType: TransactionTypeEnum;

    public _date: Date;

    private constructor(props: ITransactionProps, id?: UniqueEntityID) {
        super(id);
        this._transactionId = props.transactionId;
        this._amount = props.amount;
        this._transactionType = props.transactionType;
        this._date = props.date;
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

    get transactionType(): TransactionTypeEnum {
        return this._transactionType;
    }

    set transactionType(transactionType: TransactionTypeEnum) {
        this._transactionType = transactionType;
    }

    get date(): Date {
        return this._date;
    }

    set date(date: Date) {
        this._date = date;
    }

    public static create(props: ITransactionProps, id?: UniqueEntityID): Result<Transaction> {
        const guard = Guard.againstNullOrUndefined(props, 'Props');
        if (!guard.succeeded) {
            return Result.fail(String(guard.message), 'INVALID_REQUEST');
        }
        return Result.ok(new Transaction(props, id));
    }
}
