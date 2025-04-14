import { UniqueEntityID, Result } from '@neudesic/inizio-node-core';
import { AggregateRoot, Guard } from '@neudesic/inizio-ddd-utils';
import { Transaction } from '../transaction';
import { IAccountProps } from './account_props';

export class Account extends AggregateRoot<IAccountProps> {
    public _accountNumber: string;

    public _ownerName: string;

    public _balance: number;

    public _transactions?: Transaction[];

    private constructor(props: IAccountProps, id?: UniqueEntityID) {
        super(id);
        this._accountNumber = props.accountNumber;
        this._ownerName = props.ownerName;
        this._balance = props.balance;
        this._transactions = props.transactions;
    }

    get accountNumber(): string {
        return this._accountNumber;
    }

    set accountNumber(accountNumber: string) {
        this._accountNumber = accountNumber;
    }

    get ownerName(): string {
        return this._ownerName;
    }

    set ownerName(ownerName: string) {
        this._ownerName = ownerName;
    }

    get balance(): number {
        return this._balance;
    }

    set balance(balance: number) {
        this._balance = balance;
    }

    get transactions(): Transaction[] | undefined {
        return this._transactions;
    }

    set transactions(transactions: Transaction[] | undefined) {
        this._transactions = transactions;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public withdrawAmount(amount: number): void {
        throw new Error('not implemented');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public depositAmount(amount: number): void {
        throw new Error('not implemented');
    }

    public static create(props: IAccountProps, id?: UniqueEntityID): Result<Account> {
        const guard = Guard.againstNullOrUndefined(props, 'Props');
        if (!guard.succeeded) {
            return Result.fail(String(guard.message), 'INVALID_REQUEST');
        }
        return Result.ok(new Account(props, id));
    }
}
