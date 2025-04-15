import { UniqueEntityID, Result } from '@neudesic/inizio-node-core';
import { AggregateRoot, Guard } from '@neudesic/inizio-ddd-utils';
import { LoanTypeEnum } from '../loan_type_enum';
import { ILoanProps } from './loan_props';

export class Loan extends AggregateRoot<ILoanProps> {
    public _loanId: string;

    public _loanType: LoanTypeEnum;

    public _amount: number;

    public _interestRate: number;

    private constructor(props: ILoanProps, id?: UniqueEntityID) {
        super(id);
        this._loanId = props.loanId;
        this._loanType = props.loanType;
        this._amount = props.amount;
        this._interestRate = props.interestRate;
    }

    get loanId(): string {
        return this._loanId;
    }

    set loanId(loanId: string) {
        this._loanId = loanId;
    }

    get loanType(): LoanTypeEnum {
        return this._loanType;
    }

    set loanType(loanType: LoanTypeEnum) {
        this._loanType = loanType;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(amount: number) {
        this._amount = amount;
    }

    get interestRate(): number {
        return this._interestRate;
    }

    set interestRate(interestRate: number) {
        this._interestRate = interestRate;
    }

    public static create(props: ILoanProps, id?: UniqueEntityID): Result<Loan> {
        const guard = Guard.againstNullOrUndefined(props, 'Props');
        if (!guard.succeeded) {
            return Result.fail(String(guard.message), 'INVALID_REQUEST');
        }
        return Result.ok(new Loan(props, id));
    }
}
