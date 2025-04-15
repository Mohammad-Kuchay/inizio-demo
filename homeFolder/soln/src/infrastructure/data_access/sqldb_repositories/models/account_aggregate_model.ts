import { EntityBaseModel } from '@neudesic/inizio-sql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

/**
 * The database model for accountAggregate
 *
 * @export
 * @class AccountAggregateModel
 */
@Entity({ name: 'accountAggregate' })
export class AccountAggregateModel extends EntityBaseModel {
    /**
     * The primary key for AccountAggregate
     *
     * @type {string}
     * @memberof AccountAggregateModel
     */
    @PrimaryGeneratedColumn('uuid')
    accountAggregateId: string;

    @Column({ type: 'varchar' })
    accountNumber: string;

    @Column({ type: 'bigint' })
    balance: number;

    // Decide the join options and configure here
    accountType?: any;

    @Column({ type: 'varchar' })
    customerId: string;
}
