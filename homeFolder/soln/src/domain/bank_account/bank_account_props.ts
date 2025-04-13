import { BankAccountStatus } from '../bank_account_status';
/**
 * Interface for the BankAccount aggregate. Contains the properties of BankAccount
 *
 * @export
 * @interface IBankAccountProps
 */
export interface IBankAccountProps {
    accountNumber: string;
    holderName: string;
    balance: number;
    accountStatus: BankAccountStatus;
}
