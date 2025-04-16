import { expect } from 'chai';
import { Account } from './account';

describe('Account Aggregate', () => {
    it('Should create Account with valid props', () => {
        let account = Account.create({
            accountNumber: 'string',
            balance: 100,
            accountType: {} as any,
            owner: {} as any
        });

        expect(account.isSuccess).to.eq(true);
        expect(account.message).to.eq(undefined);
    });
});
