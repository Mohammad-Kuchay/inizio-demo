import { UniqueEntityID, Result } from '@neudesic/inizio-node-core';
import { Entity, Guard } from '@neudesic/inizio-ddd-utils';
import { ICustomerProps } from './customer_props';

export class Customer extends Entity<ICustomerProps> {
    public _name: string;

    public _email?: string;

    public _phoneNumber?: string;

    private constructor(props: ICustomerProps, id?: UniqueEntityID) {
        super(id);
        this._name = props.name;
        this._email = props.email;
        this._phoneNumber = props.phoneNumber;
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

    get phoneNumber(): string | undefined {
        return this._phoneNumber;
    }

    set phoneNumber(phoneNumber: string | undefined) {
        this._phoneNumber = phoneNumber;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public updateContactInfo(email?: string, phoneNumber?: string): void {
        throw new Error('Not Implemented');
    }

    public static create(props: ICustomerProps, id?: UniqueEntityID): Result<Customer> {
        const guard = Guard.againstNullOrUndefined(props, 'Props');
        if (!guard.succeeded) {
            return Result.fail(String(guard.message), 'INVALID_REQUEST');
        }
        return Result.ok(new Customer(props, id));
    }
}
