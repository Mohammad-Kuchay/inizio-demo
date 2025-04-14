import { EntityBaseModel } from '@neudesic/inizio-sql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

/**
 * The database model for transaction
 *
 * @export
 * @class TransactionModel
 */
@Entity({ name: 'transaction' })
export class TransactionModel extends EntityBaseModel {
    /**
     * The primary key for Transaction
     *
     * @type {string}
     * @memberof TransactionModel
     */
    @PrimaryGeneratedColumn('uuid')
    transactionId: string;

    @Column({ type: 'varchar' })
    transactionId: string;

    @Column({ type: 'bigint' })
    amount: number;

    @Column({ type: 'varchar' })
    transactionType: string;

    @Column({ type: 'datetime2' })
    transactionDate: Date;
}
