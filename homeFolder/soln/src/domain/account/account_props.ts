import { AccountTypeEnum } from '../account_type_enum';
import { Customer } from '../customer';
/**
 * Interface for the Account aggregate. Contains the properties of Account
 *
 * @export
 * @interface IAccountProps
 */
export interface IAccountProps {
    accountNumber: string;
    balance: number;
    accountType: AccountTypeEnum;
    owner: Customer;
}
