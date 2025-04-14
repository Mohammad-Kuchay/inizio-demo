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
            balance: entity.balance,
            status: entity.status
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
                balance: model.balance,
                status: model.status
            },
            new UniqueEntityID(model.accountId)
        ).getValue();
        return entity;
    }
}
