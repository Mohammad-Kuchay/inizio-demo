import { Transaction } from '../transaction';
/**
 * Interface for the Account aggregate. Contains the properties of Account
 *
 * @export
 * @interface IAccountProps
 */
export interface IAccountProps {
    accountNumber: string;
    ownerName: string;
    balance: number;
    transactions?: Transaction[];
}
