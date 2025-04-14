import { UniqueEntityID, Result } from '@neudesic/inizio-node-core';
import { AggregateRoot, Guard } from '@neudesic/inizio-ddd-utils';
import { Account } from '../account';
import { Account } from '../account';
import { ICustomerProps } from './customer_props';

export class Customer extends AggregateRoot<ICustomerProps> {
    public _customerId: string;

    public _name: string;

    public _email?: string;

    public _accounts?: Account[];

    private constructor(props: ICustomerProps, id?: UniqueEntityID) {
        super(id);
        this._customerId = props.customerId;
        this._name = props.name;
        this._email = props.email;
        this._accounts = props.accounts;
    }

    get customerId(): string {
        return this._customerId;
    }

    set customerId(customerId: string) {
        this._customerId = customerId;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get email(): string | undefined {
        return this._email;
    }

    set email(email: string | undefined) {
        this._email = email;
    }

    get accounts(): Account[] | undefined {
        return this._accounts;
    }

    set accounts(accounts: Account[] | undefined) {
        this._accounts = accounts;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public addAccount(account: Account): void {
        throw new Error('not implemented');
    }

    public static create(props: ICustomerProps, id?: UniqueEntityID): Result<Customer> {
        const guard = Guard.againstNullOrUndefined(props, 'Props');
        if (!guard.succeeded) {
            return Result.fail(String(guard.message), 'INVALID_REQUEST');
        }
        return Result.ok(new Customer(props, id));
    }
}
