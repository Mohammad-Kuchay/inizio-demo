import { BankAccountTypeEnum } from '../bank_account_type_enum';
import { Transaction } from '../transaction';
/**
 * Interface for the BankAccount aggregate. Contains the properties of BankAccount
 *
 * @export
 * @interface IBankAccountProps
 */
export interface IBankAccountProps {
    accountNumber: string;
    accountHolderName: string;
    accountType: BankAccountTypeEnum;
    balance: number;
    transactions?: Transaction[];
    isActive: boolean;
}
