import { expect } from 'chai';
import { Loan } from '../../../../domain/loan';
import { LoanMapper } from '../loan_mapper';
import { LoanModel } from '../../sqldb_repositories/models';
import { v4 as uuid } from 'uuid';

describe('Loan mapper', () => {
    it('Should map Loan to LoanModel', () => {
        const loan = Loan.create({
            loanId: 'string',
            loanType: {} as any,
            amount: 100,
            interestRate: 100
        });
        expect(loan.isSuccess).to.be.true;
        const loanResult = loan.getValue();
        const loanMapper = new LoanMapper();
        const loanModel = loanMapper.toPersistance(loanResult);
        expect(loanModel.loanId).to.equal(loanResult.id.toString());
        /* Assertions here */
    });
    it('Should map LoanModel to Loan', () => {
        const loanModel: LoanModel = {
            loanId: uuid().toUpperCase(),
            loanId: 'string',
            loanType: {} as any,
            amount: 100,
            interestRate: 100
        };
        const loanMapper = new LoanMapper();
        const loan = loanMapper.toDomain(loanModel);
        expect(loanModel.loanId).to.equal(loan.id.toString());
        /* Assertions here */
    });
});
