import { Result } from '@neudesic/inizio-node-core';
import { ValueObject, Guard } from '@neudesic/inizio-ddd-utils';
import { IAddressProps } from './address_props';

export class Address extends ValueObject<IAddressProps> {
    private constructor(props: IAddressProps) {
        super(props);
    }

    get street(): string {
        return this.props.street;
    }

    set street(street: string) {
        this.props.street = street;
    }

    get city(): string {
        return this.props.city;
    }

    set city(city: string) {
        this.props.city = city;
    }

    get state(): string {
        return this.props.state;
    }

    set state(state: string) {
        this.props.state = state;
    }

    get postalCode(): string {
        return this.props.postalCode;
    }

    set postalCode(postalCode: string) {
        this.props.postalCode = postalCode;
    }

    public static create(props: IAddressProps): Result<Address> {
        const guard = Guard.againstNullOrUndefined(props, 'Props');
        if (!guard.succeeded) {
            return Result.fail(String(guard.message), 'INVALID_REQUEST');
        }
        return Result.ok(new Address(props));
    }
}
