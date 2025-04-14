import { UniqueEntityID, Result } from '@neudesic/inizio-node-core';
import { Entity, Guard } from '@neudesic/inizio-ddd-utils';
import { ContactInfo } from '../contact_info';
import { ContactInfo } from '../contact_info';
import { ICustomerProps } from './customer_props';

export class Customer extends Entity<ICustomerProps> {
    public _firstName: string;

    public _lastName: string;

    public _contactInfo: ContactInfo;

    private constructor(props: ICustomerProps, id?: UniqueEntityID) {
        super(id);
        this._firstName = props.firstName;
        this._lastName = props.lastName;
        this._contactInfo = props.contactInfo;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(firstName: string) {
        this._firstName = firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(lastName: string) {
        this._lastName = lastName;
    }

    get contactInfo(): ContactInfo {
        return this._contactInfo;
    }

    set contactInfo(contactInfo: ContactInfo) {
        this._contactInfo = contactInfo;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public updateCustomerInfo(customerId: string, contactInfo: ContactInfo): void {
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
