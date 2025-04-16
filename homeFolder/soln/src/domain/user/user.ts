import { Result } from '@neudesic/inizio-node-core';
import { ValueObject, Guard } from '@neudesic/inizio-ddd-utils';
import { IUserProps } from './user_props';

export class User extends ValueObject<IUserProps> {
    private constructor(props: IUserProps) {
        super(props);
    }

    get firstName(): string {
        return this.props.firstName;
    }

    set firstName(firstName: string) {
        this.props.firstName = firstName;
    }

    get lastName(): string {
        return this.props.lastName;
    }

    set lastName(lastName: string) {
        this.props.lastName = lastName;
    }

    get email(): string {
        return this.props.email;
    }

    set email(email: string) {
        this.props.email = email;
    }

    get phoneNumber(): string | undefined {
        return this.props.phoneNumber;
    }

    set phoneNumber(phoneNumber: string | undefined) {
        this.props.phoneNumber = phoneNumber;
    }

    public static create(props: IUserProps): Result<User> {
        const guard = Guard.againstNullOrUndefined(props, 'Props');
        if (!guard.succeeded) {
            return Result.fail(String(guard.message), 'INVALID_REQUEST');
        }
        return Result.ok(new User(props));
    }
}
