import { UniqueEntityID, Result } from '@neudesic/inizio-node-core';
import { Entity, Guard } from '@neudesic/inizio-ddd-utils';
import { ICustomerProps } from './customer_props';

export class Customer extends Entity<ICustomerProps> {
    public _name: string;

    public _email: string;

    public _phone: string;

    private constructor(props: ICustomerProps, id?: UniqueEntityID) {
        super(id);
        this._name = props.name;
        this._email = props.email;
        this._phone = props.phone;
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

    get phone(): string {
        return this._phone;
    }

    set phone(phone: string) {
        this._phone = phone;
    }

    public static create(props: ICustomerProps, id?: UniqueEntityID): Result<Customer> {
        const guard = Guard.againstNullOrUndefined(props, 'Props');
        if (!guard.succeeded) {
            return Result.fail(String(guard.message), 'INVALID_REQUEST');
        }
        return Result.ok(new Customer(props, id));
    }
}
