import { UniqueEntityID, Result } from '@neudesic/inizio-node-core';
import { AggregateRoot, Guard } from '@neudesic/inizio-ddd-utils';
import { BankAccountTypeEnum } from '../bank_account_type_enum';
import { Transaction } from '../transaction';
import { IBankAccountProps } from './bank_account_props';

export class BankAccount extends AggregateRoot<IBankAccountProps> {
    public _accountNumber: string;

    public _accountHolderName: string;

    public _accountType: BankAccountTypeEnum;

    public _balance: number;

    public _transactions?: Transaction[];

    public _isActive: boolean;

    private constructor(props: IBankAccountProps, id?: UniqueEntityID) {
        super(id);
        this._accountNumber = props.accountNumber;
        this._accountHolderName = props.accountHolderName;
        this._accountType = props.accountType;
        this._balance = props.balance;
        this._transactions = props.transactions;
        this._isActive = props.isActive;
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

    get accountType(): BankAccountTypeEnum {
        return this._accountType;
    }

    set accountType(accountType: BankAccountTypeEnum) {
        this._accountType = accountType;
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

    get isActive(): boolean {
        return this._isActive;
    }

    set isActive(isActive: boolean) {
        this._isActive = isActive;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public credit(amount: number): void {
        throw new Error('not implemented');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public debit(amount: number): boolean {
        throw new Error('not implemented');
    }

    public static create(props: IBankAccountProps, id?: UniqueEntityID): Result<BankAccount> {
        const guard = Guard.againstNullOrUndefined(props, 'Props');
        if (!guard.succeeded) {
            return Result.fail(String(guard.message), 'INVALID_REQUEST');
        }
        return Result.ok(new BankAccount(props, id));
    }
}
