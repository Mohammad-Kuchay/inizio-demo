import { Address } from '../address';
import { BankAccount } from '../bank_account';
/**
 * Interface for the Customer aggregate. Contains the properties of Customer
 *
 * @export
 * @interface ICustomerProps
 */
export interface ICustomerProps {
    customerNumber: string;
    name: string;
    email: string;
    phoneNumber: string;
    address: Address;
    bankAccounts?: BankAccount[];
}
