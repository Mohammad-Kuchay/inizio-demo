import { UniqueEntityID, Result } from '@neudesic/inizio-node-core';
import { AggregateRoot, Guard } from '@neudesic/inizio-ddd-utils';
import { TransactionTypeEnum } from '../transaction_type_enum';
import { Account } from '../account';
import { ITransactionProps } from './transaction_props';

export class Transaction extends AggregateRoot<ITransactionProps> {
    public _transactionId: string;

    public _amount: number;

    public _transactionType: TransactionTypeEnum;

    public _transactionDate: Date;

    public _relatedAccount: Account;

    private constructor(props: ITransactionProps, id?: UniqueEntityID) {
        super(id);
        this._transactionId = props.transactionId;
        this._amount = props.amount;
        this._transactionType = props.transactionType;
        this._transactionDate = props.transactionDate;
        this._relatedAccount = props.relatedAccount;
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

    get transactionDate(): Date {
        return this._transactionDate;
    }

    set transactionDate(transactionDate: Date) {
        this._transactionDate = transactionDate;
    }

    get relatedAccount(): Account {
        return this._relatedAccount;
    }

    set relatedAccount(relatedAccount: Account) {
        this._relatedAccount = relatedAccount;
    }

    public static create(props: ITransactionProps, id?: UniqueEntityID): Result<Transaction> {
        const guard = Guard.againstNullOrUndefined(props, 'Props');
        if (!guard.succeeded) {
            return Result.fail(String(guard.message), 'INVALID_REQUEST');
        }
        return Result.ok(new Transaction(props, id));
    }
}
