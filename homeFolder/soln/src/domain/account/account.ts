import { UniqueEntityID, Result } from '@neudesic/inizio-node-core';
import { AggregateRoot, Guard } from '@neudesic/inizio-ddd-utils';
import { IAccountProps } from './account_props';

export class Account extends AggregateRoot<IAccountProps> {
    public _accountNumber: string;

    public _accountHolderName: string;

    public _balance: number;

    private constructor(props: IAccountProps, id?: UniqueEntityID) {
        super(id);
        this._accountNumber = props.accountNumber;
        this._accountHolderName = props.accountHolderName;
        this._balance = props.balance;
    }

    get accountNumber(): string {
        return this._accountNumber;
    }

    set accountNumber(accountNumber: string) {
        this._accountNumber = accountNumber;
    }

    get accountHolderName(): string {
        return this._accountHolderName;
    }

    set accountHolderName(accountHolderName: string) {
        this._accountHolderName = accountHolderName;
    }

    get balance(): number {
        return this._balance;
    }

    set balance(balance: number) {
        this._balance = balance;
    }

    public static create(props: IAccountProps, id?: UniqueEntityID): Result<Account> {
        const guard = Guard.againstNullOrUndefined(props, 'Props');
        if (!guard.succeeded) {
            return Result.fail(String(guard.message), 'INVALID_REQUEST');
        }
        return Result.ok(new Account(props, id));
    }
}
