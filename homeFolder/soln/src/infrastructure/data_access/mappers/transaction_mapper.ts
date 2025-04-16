import { IMapper, UniqueEntityID } from '@neudesic/inizio-node-core';
import { Transaction } from '../../../domain/transaction';
import { TransactionModel } from '../sqldb_repositories/models';

/**
 * Mapper for mapping Transaction and TransactionModel
 *
 * @export
 * @class TransactionMapper
 * @implements {IMapper<Transaction, TransactionModel>}
 */
export class TransactionMapper implements IMapper<Transaction, TransactionModel> {
    /**
     * Map from Transaction to TransactionModel
     *
     * @param {Transaction} entity
     * @returns {TransactionModel}
     * @memberof TransactionMapper
     */
    toPersistance(entity: Transaction): TransactionModel {
        const model: TransactionModel = {
            transactionId: entity.id.toString(),
            transactionId: entity.transactionId,
            amount: entity.amount,
            transactionType: entity.transactionType,
            transactionDate: entity.transactionDate,
            relatedAccount: entity.relatedAccount
        };
        return model;
    }

    /**
     * Map from TransactionModel to Transaction
     *
     * @param {TransactionModel} model
     * @returns {Transaction}
     * @memberof TransactionMapper
     */
    toDomain(model: TransactionModel): Transaction {
        const entity: Transaction = Transaction.create(
            {
                transactionId: model.transactionId,
                amount: model.amount,
                transactionType: model.transactionType,
                transactionDate: model.transactionDate,
                relatedAccount: model.relatedAccount
            },
            new UniqueEntityID(model.transactionId)
        ).getValue();
        return entity;
    }
}
