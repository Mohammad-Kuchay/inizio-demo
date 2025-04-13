import { expect } from 'chai';
import { Transaction } from './transaction';

describe('Transaction Aggregate', () => {
    it('Should create Transaction with valid props', () => {
        let transaction = Transaction.create({
            transactionId: 'string',
            accountNumber: 'string',
            amount: 100,
            transactionType: {} as any,
            timestamp: {} as any
        });

        expect(transaction.isSuccess).to.eq(true);
        expect(transaction.message).to.eq(undefined);
    });
});
