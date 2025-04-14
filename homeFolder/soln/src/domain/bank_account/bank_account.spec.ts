import { expect } from 'chai';
import { BankAccount } from './bank_account';

describe('BankAccount Aggregate', () => {
    it('Should create BankAccount with valid props', () => {
        let bankAccount = BankAccount.create({
            accountNumber: 'string',
            accountHolderName: 'string',
            accountType: {} as any,
            balance: 100,
            isActive: true
        });

        expect(bankAccount.isSuccess).to.eq(true);
        expect(bankAccount.message).to.eq(undefined);
    });
});
