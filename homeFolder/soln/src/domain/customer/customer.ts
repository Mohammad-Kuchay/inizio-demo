import { UniqueEntityID, Result } from '@neudesic/inizio-node-core';
import { AggregateRoot, Guard } from '@neudesic/inizio-ddd-utils';
import { Address } from '../address';
import { BankAccount } from '../bank_account';
import { BankAccount } from '../bank_account';
import { ICustomerProps } from './customer_props';

export class Customer extends AggregateRoot<ICustomerProps> {
    public _customerNumber: string;

    public _name: string;

    public _email: string;

    public _phoneNumber: string;

    public _address: Address;

    public _bankAccounts?: BankAccount[];

    private constructor(props: ICustomerProps, id?: UniqueEntityID) {
        super(id);
        this._customerNumber = props.customerNumber;
        this._name = props.name;
        this._email = props.email;
        this._phoneNumber = props.phoneNumber;
        this._address = props.address;
        this._bankAccounts = props.bankAccounts;
    }

    get customerNumber(): string {
        return this._customerNumber;
    }

    set customerNumber(customerNumber: string) {
        this._customerNumber = customerNumber;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get email(): string {
        return this._email;
    }

    set email(email: string) {
        this._email = email;
    }

    get phoneNumber(): string {
        return this._phoneNumber;
    }

    set phoneNumber(phoneNumber: string) {
        this._phoneNumber = phoneNumber;
    }

    get address(): Address {
        return this._address;
    }

    set address(address: Address) {
        this._address = address;
    }

    get bankAccounts(): BankAccount[] | undefined {
        return this._bankAccounts;
    }

    set bankAccounts(bankAccounts: BankAccount[] | undefined) {
        this._bankAccounts = bankAccounts;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public linkAccount(account: BankAccount): void {
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
