import { expect } from 'chai';
import { Transaction } from './transaction';

describe('Transaction Entity', () => {
    it('Should create Transaction with valid props', () => {
        let transaction = Transaction.create({
            transactionId: 'string',
            amount: 100,
            transactionType: {} as any,
            date: {} as any
        });

        expect(transaction.isSuccess).to.eq(true);
        expect(transaction.message).to.eq(undefined);
    });
});
