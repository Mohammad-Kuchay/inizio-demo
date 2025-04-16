import { UniqueEntityID, Result } from '@neudesic/inizio-node-core';
import { AggregateRoot, Guard } from '@neudesic/inizio-ddd-utils';
import { AccountTypeEnum } from '../account_type_enum';
import { Customer } from '../customer';
import { IAccountProps } from './account_props';

export class Account extends AggregateRoot<IAccountProps> {
    public _accountNumber: string;

    public _balance: number;

    public _accountType: AccountTypeEnum;

    public _owner: Customer;

    private constructor(props: IAccountProps, id?: UniqueEntityID) {
        super(id);
        this._accountNumber = props.accountNumber;
        this._balance = props.balance;
        this._accountType = props.accountType;
        this._owner = props.owner;
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

    get accountType(): AccountTypeEnum {
        return this._accountType;
    }

    set accountType(accountType: AccountTypeEnum) {
        this._accountType = accountType;
    }

    get owner(): Customer {
        return this._owner;
    }

    set owner(owner: Customer) {
        this._owner = owner;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public credit(amount: number): void {
        throw new Error('not implemented');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public debit(amount: number): void {
        throw new Error('not implemented');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public transfer(amount: number, targetAccount: Account): void {
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
