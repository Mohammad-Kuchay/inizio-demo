import { Result } from '@neudesic/inizio-node-core';
import { ValueObject, Guard } from '@neudesic/inizio-ddd-utils';
import { IContactInfoProps } from './contact_info_props';

export class ContactInfo extends ValueObject<IContactInfoProps> {
    private constructor(props: IContactInfoProps) {
        super(props);
    }

    get email(): string {
        return this.props.email;
    }

    set email(email: string) {
        this.props.email = email;
    }

    get phone(): string {
        return this.props.phone;
    }

    set phone(phone: string) {
        this.props.phone = phone;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public updateContactInfo(newEmail: string, newPhone: string): void {
        throw new Error('Not Implemented');
    }

    public static create(props: IContactInfoProps): Result<ContactInfo> {
        const guard = Guard.againstNullOrUndefined(props, 'Props');
        if (!guard.succeeded) {
            return Result.fail(String(guard.message), 'INVALID_REQUEST');
        }
        return Result.ok(new ContactInfo(props));
    }
}
