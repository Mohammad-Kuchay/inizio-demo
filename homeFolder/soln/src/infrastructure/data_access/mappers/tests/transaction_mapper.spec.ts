import { expect } from 'chai';
import { Transaction } from '../../../../domain/transaction';
import { TransactionMapper } from '../transaction_mapper';
import { TransactionModel } from '../../sqldb_repositories/models';
import { v4 as uuid } from 'uuid';

describe('Transaction mapper', () => {
    it('Should map Transaction to TransactionModel', () => {
        const transaction = Transaction.create({
            transactionId: 'string',
            amount: 100,
            transactionType: 'string',
            transactionDate: {} as any
        });
        expect(transaction.isSuccess).to.be.true;
        const transactionResult = transaction.getValue();
        const transactionMapper = new TransactionMapper();
        const transactionModel = transactionMapper.toPersistance(transactionResult);
        expect(transactionModel.transactionId).to.equal(transactionResult.id.toString());
        /* Assertions here */
    });
    it('Should map TransactionModel to Transaction', () => {
        const transactionModel: TransactionModel = {
            transactionId: uuid().toUpperCase(),
            transactionId: 'string',
            amount: 100,
            transactionType: 'string',
            transactionDate: {} as any
        };
        const transactionMapper = new TransactionMapper();
        const transaction = transactionMapper.toDomain(transactionModel);
        expect(transactionModel.transactionId).to.equal(transaction.id.toString());
        /* Assertions here */
    });
});
