import { Result } from '@neudesic/inizio-node-core';
import { ValueObject, Guard } from '@neudesic/inizio-ddd-utils';
import { ITransactionDetailProps } from './transaction_detail_props';

export class TransactionDetail extends ValueObject<ITransactionDetailProps> {
    private constructor(props: ITransactionDetailProps) {
        super(props);
    }

    get transactionAmount(): number {
        return this.props.transactionAmount;
    }

    set transactionAmount(transactionAmount: number) {
        this.props.transactionAmount = transactionAmount;
    }

    get transactionDate(): Date {
        return this.props.transactionDate;
    }

    set transactionDate(transactionDate: Date) {
        this.props.transactionDate = transactionDate;
    }

    public static create(props: ITransactionDetailProps): Result<TransactionDetail> {
        const guard = Guard.againstNullOrUndefined(props, 'Props');
        if (!guard.succeeded) {
            return Result.fail(String(guard.message), 'INVALID_REQUEST');
        }
        return Result.ok(new TransactionDetail(props));
    }
}
