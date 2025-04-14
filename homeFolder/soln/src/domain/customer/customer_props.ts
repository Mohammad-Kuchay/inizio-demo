import { Account } from '../account';
/**
 * Interface for the Customer aggregate. Contains the properties of Customer
 *
 * @export
 * @interface ICustomerProps
 */
export interface ICustomerProps {
    customerId: string;
    name: string;
    email?: string;
    accounts?: Account[];
}
