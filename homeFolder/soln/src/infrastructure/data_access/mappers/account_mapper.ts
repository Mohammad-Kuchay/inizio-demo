import { IMapper, UniqueEntityID } from '@neudesic/inizio-node-core';
import { Account } from '../../../domain/account';
import { AccountModel } from '../sqldb_repositories/models';

/**
 * Mapper for mapping Account and AccountModel
 *
 * @export
 * @class AccountMapper
 * @implements {IMapper<Account, AccountModel>}
 */
export class AccountMapper implements IMapper<Account, AccountModel> {
    /**
     * Map from Account to AccountModel
     *
     * @param {Account} entity
     * @returns {AccountModel}
     * @memberof AccountMapper
     */
    toPersistance(entity: Account): AccountModel {
        const model: AccountModel = {
            accountId: entity.id.toString(),
            accountNumber: entity.accountNumber,
            accountHolderName: entity.accountHolderName,
            balance: entity.balance
        };
        return model;
    }

    /**
     * Map from AccountModel to Account
     *
     * @param {AccountModel} model
     * @returns {Account}
     * @memberof AccountMapper
     */
    toDomain(model: AccountModel): Account {
        const entity: Account = Account.create(
            {
                accountNumber: model.accountNumber,
                accountHolderName: model.accountHolderName,
                balance: model.balance
            },
            new UniqueEntityID(model.accountId)
        ).getValue();
        return entity;
    }
}
