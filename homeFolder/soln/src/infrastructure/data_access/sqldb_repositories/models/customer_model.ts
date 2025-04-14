import { EntityBaseModel } from '@neudesic/inizio-sql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

/**
 * The database model for customer
 *
 * @export
 * @class CustomerModel
 */
@Entity({ name: 'customer' })
export class CustomerModel extends EntityBaseModel {
    /**
     * The primary key for Customer
     *
     * @type {string}
     * @memberof CustomerModel
     */
    @PrimaryGeneratedColumn('uuid')
    customerId: string;

    @Column({ type: 'varchar' })
    firstName: string;

    @Column({ type: 'varchar' })
    lastName: string;

    // Decide the join options and configure here
    contactInfo?: any;
}
