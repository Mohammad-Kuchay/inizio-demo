import { expect } from 'chai';
import { BankAccount } from '../../../../domain/bank_account';
import { BankAccountMapper } from '../bank_account_mapper';
import { BankAccountModel } from '../../sqldb_repositories/models';
import { v4 as uuid } from 'uuid';

describe('BankAccount mapper', () => {
    it('Should map BankAccount to BankAccountModel', () => {
        const bankAccount = BankAccount.create({
            accountNumber: 'string',
            accountHolderName: 'string',
            accountType: {} as any,
            balance: 100,
            isActive: true
        });
        expect(bankAccount.isSuccess).to.be.true;
        const bankAccountResult = bankAccount.getValue();
        const bankAccountMapper = new BankAccountMapper();
        const bankAccountModel = bankAccountMapper.toPersistance(bankAccountResult);
        expect(bankAccountModel.bankAccountId).to.equal(bankAccountResult.id.toString());
        /* Assertions here */
    });
    it('Should map BankAccountModel to BankAccount', () => {
        const bankAccountModel: BankAccountModel = {
            bankAccountId: uuid().toUpperCase(),
            accountNumber: 'string',
            accountHolderName: 'string',
            accountType: {} as any,
            balance: 100,
            isActive: true
        };
        const bankAccountMapper = new BankAccountMapper();
        const bankAccount = bankAccountMapper.toDomain(bankAccountModel);
        expect(bankAccountModel.bankAccountId).to.equal(bankAccount.id.toString());
        /* Assertions here */
    });
});
