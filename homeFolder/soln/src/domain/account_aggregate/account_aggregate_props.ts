import { AccountTypeEnum } from '../account_type_enum';
/**
 * Interface for the AccountAggregate aggregate. Contains the properties of AccountAggregate
 *
 * @export
 * @interface IAccountAggregateProps
 */
export interface IAccountAggregateProps {
    accountNumber: string;
    balance: number;
    accountType: AccountTypeEnum;
    customerId: string;
}
