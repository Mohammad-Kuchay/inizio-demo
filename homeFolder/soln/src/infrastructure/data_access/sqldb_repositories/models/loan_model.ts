import { EntityBaseModel } from '@neudesic/inizio-sql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

/**
 * The database model for loan
 *
 * @export
 * @class LoanModel
 */
@Entity({ name: 'loan' })
export class LoanModel extends EntityBaseModel {
    /**
     * The primary key for Loan
     *
     * @type {string}
     * @memberof LoanModel
     */
    @PrimaryGeneratedColumn('uuid')
    loanId: string;

    @Column({ type: 'varchar' })
    loanId: string;

    // Decide the join options and configure here
    loanType?: any;

    @Column({ type: 'bigint' })
    amount: number;

    @Column({ type: 'bigint' })
    interestRate: number;
}
