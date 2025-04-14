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
    name: string;

    @Column({ type: 'varchar' })
    email: string;

    @Column({ type: 'varchar' })
    phoneNumber: string;
}
