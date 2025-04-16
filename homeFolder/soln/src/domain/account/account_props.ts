import { User } from '../user';
import { AccountStatusEnum } from '../account_status_enum';
/**
 * Interface for the Account aggregate. Contains the properties of Account
 *
 * @export
 * @interface IAccountProps
 */
export interface IAccountProps {
    accountHolder: User;
    accountNumber: string;
    balance: number;
    status: AccountStatusEnum;
}
