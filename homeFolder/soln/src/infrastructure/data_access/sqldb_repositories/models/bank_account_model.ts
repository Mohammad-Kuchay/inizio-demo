import { EntityBaseModel } from '@neudesic/inizio-sql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

/**
 * The database model for bankAccount
 *
 * @export
 * @class BankAccountModel
 */
@Entity({ name: 'bankAccount' })
export class BankAccountModel extends EntityBaseModel {
    /**
     * The primary key for BankAccount
     *
     * @type {string}
     * @memberof BankAccountModel
     */
    @PrimaryGeneratedColumn('uuid')
    bankAccountId: string;

    @Column({ type: 'varchar' })
    accountNumber: string;

    @Column({ type: 'varchar' })
    accountHolderName: string;

    // Decide the join options and configure here
    accountType?: any;

    @Column({ type: 'bigint' })
    balance: number;

    // Decide the join options and configure here
    transactions?: any[];

    @Column({ type: 'bit' })
    isActive: boolean;
}
