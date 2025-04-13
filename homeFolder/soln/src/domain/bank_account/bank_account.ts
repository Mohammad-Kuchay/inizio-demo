import { UniqueEntityID, Result } from '@neudesic/inizio-node-core';
import { AggregateRoot, Guard } from '@neudesic/inizio-ddd-utils';
import { BankAccountStatus } from '../bank_account_status';
import { IBankAccountProps } from './bank_account_props';

export class BankAccount extends AggregateRoot<IBankAccountProps> {
    public _accountNumber: string;

    public _holderName: string;

    public _balance: number;

    public _accountStatus: BankAccountStatus;

    private constructor(props: IBankAccountProps, id?: UniqueEntityID) {
        super(id);
        this._accountNumber = props.accountNumber;
        this._holderName = props.holderName;
        this._balance = props.balance;
        this._accountStatus = props.accountStatus;
    }

    get accountNumber(): string {
        return this._accountNumber;
    }

    set accountNumber(accountNumber: string) {
        this._accountNumber = accountNumber;
    }

    get holderName(): string {
        return this._holderName;
    }

    set holderName(holderName: string) {
        this._holderName = holderName;
    }

    get balance(): number {
        return this._balance;
    }

    set balance(balance: number) {
        this._balance = balance;
    }

    get accountStatus(): BankAccountStatus {
        return this._accountStatus;
    }

    set accountStatus(accountStatus: BankAccountStatus) {
        this._accountStatus = accountStatus;
    }

    public static create(props: IBankAccountProps, id?: UniqueEntityID): Result<BankAccount> {
        const guard = Guard.againstNullOrUndefined(props, 'Props');
        if (!guard.succeeded) {
            return Result.fail(String(guard.message), 'INVALID_REQUEST');
        }
        return Result.ok(new BankAccount(props, id));
    }
}
