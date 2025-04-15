import { expect } from 'chai';
import { Loan } from './loan';

describe('Loan Aggregate', () => {
    it('Should create Loan with valid props', () => {
        let loan = Loan.create({
            loanId: 'string',
            loanType: {} as any,
            amount: 100,
            interestRate: 100
        });

        expect(loan.isSuccess).to.eq(true);
        expect(loan.message).to.eq(undefined);
    });
});
