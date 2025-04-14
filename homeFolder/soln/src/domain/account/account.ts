import { UniqueEntityID, Result } from '@neudesic/inizio-node-core';
import { AggregateRoot, Guard } from '@neudesic/inizio-ddd-utils';
import { AccountStatusEnum } from '../account_status_enum';
import { IAccountProps } from './account_props';

export class Account extends AggregateRoot<IAccountProps> {
    public _accountNumber: string;

    public _balance: number;

    public _status: AccountStatusEnum;

    private constructor(props: IAccountProps, id?: UniqueEntityID) {
        super(id);
        this._accountNumber = props.accountNumber;
        this._balance = props.balance;
        this._status = props.status;
    }

    get accountNumber(): string {
        return this._accountNumber;
    }

    set accountNumber(accountNumber: string) {
        this._accountNumber = accountNumber;
    }

    get balance(): number {
        return this._balance;
    }

    set balance(balance: number) {
        this._balance = balance;
    }

    get status(): AccountStatusEnum {
        return this._status;
    }

    set status(status: AccountStatusEnum) {
        this._status = status;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public openAccount(customerId: string, initialBalance: number): void {
        throw new Error('not implemented');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public closeAccount(accountId: string): void {
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
