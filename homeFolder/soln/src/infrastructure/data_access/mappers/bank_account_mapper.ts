import { IMapper, UniqueEntityID } from '@neudesic/inizio-node-core';
import { BankAccount } from '../../../domain/bank_account';
import { BankAccountModel } from '../sqldb_repositories/models';

/**
 * Mapper for mapping BankAccount and BankAccountModel
 *
 * @export
 * @class BankAccountMapper
 * @implements {IMapper<BankAccount, BankAccountModel>}
 */
export class BankAccountMapper implements IMapper<BankAccount, BankAccountModel> {
    /**
     * Map from BankAccount to BankAccountModel
     *
     * @param {BankAccount} entity
     * @returns {BankAccountModel}
     * @memberof BankAccountMapper
     */
    toPersistance(entity: BankAccount): BankAccountModel {
        const model: BankAccountModel = {
            bankAccountId: entity.id.toString(),
            accountNumber: entity.accountNumber,
            accountHolderName: entity.accountHolderName,
            accountType: entity.accountType,
            balance: entity.balance,
            isActive: entity.isActive
        };
        return model;
    }

    /**
     * Map from BankAccountModel to BankAccount
     *
     * @param {BankAccountModel} model
     * @returns {BankAccount}
     * @memberof BankAccountMapper
     */
    toDomain(model: BankAccountModel): BankAccount {
        const entity: BankAccount = BankAccount.create(
            {
                accountNumber: model.accountNumber,
                accountHolderName: model.accountHolderName,
                accountType: model.accountType,
                balance: model.balance,
                isActive: model.isActive
            },
            new UniqueEntityID(model.bankAccountId)
        ).getValue();
        return entity;
    }
}
