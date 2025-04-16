import { expect } from 'chai';
import { Transaction } from './transaction';

describe('Transaction Aggregate', () => {
    it('Should create Transaction with valid props', () => {
        let transaction = Transaction.create({
            transactionId: 'string',
            amount: 100,
            transactionType: {} as any,
            transactionDate: {} as any,
            relatedAccount: {} as any
        });

        expect(transaction.isSuccess).to.eq(true);
        expect(transaction.message).to.eq(undefined);
    });
});
