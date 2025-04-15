import { Result } from '@neudesic/inizio-node-core';
import { ValueObject, Guard } from '@neudesic/inizio-ddd-utils';
import { ICustomerProps } from './customer_props';

export class Customer extends ValueObject<ICustomerProps> {
    private constructor(props: ICustomerProps) {
        super(props);
    }

    get customerId(): string {
        return this.props.customerId;
    }

    set customerId(customerId: string) {
        this.props.customerId = customerId;
    }

    get name(): string {
        return this.props.name;
    }

    set name(name: string) {
        this.props.name = name;
    }

    get email(): string {
        return this.props.email;
    }

    set email(email: string) {
        this.props.email = email;
    }

    public static create(props: ICustomerProps): Result<Customer> {
        const guard = Guard.againstNullOrUndefined(props, 'Props');
        if (!guard.succeeded) {
            return Result.fail(String(guard.message), 'INVALID_REQUEST');
        }
        return Result.ok(new Customer(props));
    }
}
