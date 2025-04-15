import { IMapper, UniqueEntityID } from '@neudesic/inizio-node-core';
import { Loan } from '../../../domain/loan';
import { LoanModel } from '../sqldb_repositories/models';

/**
 * Mapper for mapping Loan and LoanModel
 *
 * @export
 * @class LoanMapper
 * @implements {IMapper<Loan, LoanModel>}
 */
export class LoanMapper implements IMapper<Loan, LoanModel> {
    /**
     * Map from Loan to LoanModel
     *
     * @param {Loan} entity
     * @returns {LoanModel}
     * @memberof LoanMapper
     */
    toPersistance(entity: Loan): LoanModel {
        const model: LoanModel = {
            loanId: entity.id.toString(),
            loanId: entity.loanId,
            loanType: entity.loanType,
            amount: entity.amount,
            interestRate: entity.interestRate
        };
        return model;
    }

    /**
     * Map from LoanModel to Loan
     *
     * @param {LoanModel} model
     * @returns {Loan}
     * @memberof LoanMapper
     */
    toDomain(model: LoanModel): Loan {
        const entity: Loan = Loan.create(
            {
                loanId: model.loanId,
                loanType: model.loanType,
                amount: model.amount,
                interestRate: model.interestRate
            },
            new UniqueEntityID(model.loanId)
        ).getValue();
        return entity;
    }
}
