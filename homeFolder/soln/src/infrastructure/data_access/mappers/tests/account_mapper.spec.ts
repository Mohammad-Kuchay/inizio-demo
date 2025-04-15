import { expect } from 'chai';
import { Account } from '../../../../domain/account';
import { AccountMapper } from '../account_mapper';
import { AccountModel } from '../../sqldb_repositories/models';
import { v4 as uuid } from 'uuid';

describe('Account mapper', () => {
    it('Should map Account to AccountModel', () => {
        const account = Account.create({
            accountNumber: 'string',
            accountType: {} as any,
            balance: 100,
            owner: {} as any
        });
        expect(account.isSuccess).to.be.true;
        const accountResult = account.getValue();
        const accountMapper = new AccountMapper();
        const accountModel = accountMapper.toPersistance(accountResult);
        expect(accountModel.accountId).to.equal(accountResult.id.toString());
        /* Assertions here */
    });
    it('Should map AccountModel to Account', () => {
        const accountModel: AccountModel = {
            accountId: uuid().toUpperCase(),
            accountNumber: 'string',
            accountType: {} as any,
            balance: 100,
            owner: {} as any
        };
        const accountMapper = new AccountMapper();
        const account = accountMapper.toDomain(accountModel);
        expect(accountModel.accountId).to.equal(account.id.toString());
        /* Assertions here */
    });
});
