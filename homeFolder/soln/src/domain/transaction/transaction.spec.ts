import { expect } from 'chai';
import { Transaction } from './transaction';

describe('Transaction Value object', () => {
    it('Should create Transaction with valid props', () => {
        let transaction = Transaction.create({
            transactionId: 'string',
            timestamp: {} as any,
            amount: 100,
            description: 'string',
            transactionType: {} as any
        });

        expect(transaction.isSuccess).to.eq(true);
        expect(transaction.message).to.eq(undefined);
    });
});
