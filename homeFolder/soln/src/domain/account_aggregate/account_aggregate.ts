import { UniqueEntityID, Result } from '@neudesic/inizio-node-core';
import { AggregateRoot, Guard } from '@neudesic/inizio-ddd-utils';
import { AccountTypeEnum } from '../account_type_enum';
import { IAccountAggregateProps } from './account_aggregate_props';

export class AccountAggregate extends AggregateRoot<IAccountAggregateProps> {
    public _accountNumber: string;

    public _balance: number;

    public _accountType: AccountTypeEnum;

    public _customerId: string;

    private constructor(props: IAccountAggregateProps, id?: UniqueEntityID) {
        super(id);
        this._accountNumber = props.accountNumber;
        this._balance = props.balance;
        this._accountType = props.accountType;
        this._customerId = props.customerId;
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

    get customerId(): string {
        return this._customerId;
    }

    set customerId(customerId: string) {
        this._customerId = customerId;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public creditAmount(amount: number): void {
        throw new Error('not implemented');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public debitAmount(amount: number): void {
        throw new Error('not implemented');
    }

    public static create(props: IAccountAggregateProps, id?: UniqueEntityID): Result<AccountAggregate> {
        const guard = Guard.againstNullOrUndefined(props, 'Props');
        if (!guard.succeeded) {
            return Result.fail(String(guard.message), 'INVALID_REQUEST');
        }
        return Result.ok(new AccountAggregate(props, id));
    }
}
