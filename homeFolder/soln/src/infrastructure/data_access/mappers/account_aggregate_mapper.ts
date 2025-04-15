import { IMapper, UniqueEntityID } from '@neudesic/inizio-node-core';
import { AccountAggregate } from '../../../domain/account_aggregate';
import { AccountAggregateModel } from '../sqldb_repositories/models';

/**
 * Mapper for mapping AccountAggregate and AccountAggregateModel
 *
 * @export
 * @class AccountAggregateMapper
 * @implements {IMapper<AccountAggregate, AccountAggregateModel>}
 */
export class AccountAggregateMapper implements IMapper<AccountAggregate, AccountAggregateModel> {
    /**
     * Map from AccountAggregate to AccountAggregateModel
     *
     * @param {AccountAggregate} entity
     * @returns {AccountAggregateModel}
     * @memberof AccountAggregateMapper
     */
    toPersistance(entity: AccountAggregate): AccountAggregateModel {
        const model: AccountAggregateModel = {
            accountAggregateId: entity.id.toString(),
            accountNumber: entity.accountNumber,
            balance: entity.balance,
            accountType: entity.accountType,
            customerId: entity.customerId
        };
        return model;
    }

    /**
     * Map from AccountAggregateModel to AccountAggregate
     *
     * @param {AccountAggregateModel} model
     * @returns {AccountAggregate}
     * @memberof AccountAggregateMapper
     */
    toDomain(model: AccountAggregateModel): AccountAggregate {
        const entity: AccountAggregate = AccountAggregate.create(
            {
                accountNumber: model.accountNumber,
                balance: model.balance,
                accountType: model.accountType,
                customerId: model.customerId
            },
            new UniqueEntityID(model.accountAggregateId)
        ).getValue();
        return entity;
    }
}
