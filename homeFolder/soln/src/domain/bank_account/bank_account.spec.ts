import { expect } from 'chai';
import { BankAccount } from './bank_account';

describe('BankAccount Aggregate', () => {
    it('Should create BankAccount with valid props', () => {
        let bankAccount = BankAccount.create({
            accountNumber: 'string',
            holderName: 'string',
            balance: 100,
            accountStatus: {} as any
        });

        expect(bankAccount.isSuccess).to.eq(true);
        expect(bankAccount.message).to.eq(undefined);
    });
});
