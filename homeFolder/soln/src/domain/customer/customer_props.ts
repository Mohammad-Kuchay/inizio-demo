import { ContactInfo } from '../contact_info';
/**
 * Interface for the Customer entity. Contains the properties of Customer
 *
 * @export
 * @interface ICustomerProps
 */
export interface ICustomerProps {
    firstName: string;
    lastName: string;
    contactInfo: ContactInfo;
}
