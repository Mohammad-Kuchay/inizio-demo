import { Result } from '@neudesic/inizio-node-core';
import { ValueObject, Guard } from '@neudesic/inizio-ddd-utils';
import { IMoneyProps } from './money_props';

export class Money extends ValueObject<IMoneyProps> {
    private constructor(props: IMoneyProps) {
        super(props);
    }

    get currency(): string {
        return this.props.currency;
    }

    set currency(currency: string) {
        this.props.currency = currency;
    }

    get amount(): number {
        return this.props.amount;
    }

    set amount(amount: number) {
        this.props.amount = amount;
    }

    public static create(props: IMoneyProps): Result<Money> {
        const guard = Guard.againstNullOrUndefined(props, 'Props');
        if (!guard.succeeded) {
            return Result.fail(String(guard.message), 'INVALID_REQUEST');
        }
        return Result.ok(new Money(props));
    }
}
