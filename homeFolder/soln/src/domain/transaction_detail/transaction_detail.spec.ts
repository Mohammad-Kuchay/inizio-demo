import { expect } from 'chai';
import { TransactionDetail } from './transaction_detail';

describe('TransactionDetail Value object', () => {
    it('Should create TransactionDetail with valid props', () => {
        let transactionDetail = TransactionDetail.create({
            transactionAmount: 100,
            transactionDate: {} as any
        });

        expect(transactionDetail.isSuccess).to.eq(true);
        expect(transactionDetail.message).to.eq(undefined);
    });
});
