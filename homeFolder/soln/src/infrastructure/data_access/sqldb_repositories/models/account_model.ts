import { EntityBaseModel } from '@neudesic/inizio-sql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

/**
 * The database model for account
 *
 * @export
 * @class AccountModel
 */
@Entity({ name: 'account' })
export class AccountModel extends EntityBaseModel {
    /**
     * The primary key for Account
     *
     * @type {string}
     * @memberof AccountModel
     */
    @PrimaryGeneratedColumn('uuid')
    accountId: string;

    @Column({ type: 'varchar' })
    accountNumber: string;

    @Column({ type: 'bigint' })
    balance: number;

    // Decide the join options and configure here
    status?: any;
}
