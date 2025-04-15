import { expect } from 'chai';
import { AccountAggregate } from '../../../../domain/account_aggregate';
import { AccountAggregateMapper } from '../account_aggregate_mapper';
import { AccountAggregateModel } from '../../sqldb_repositories/models';
import { v4 as uuid } from 'uuid';

describe('AccountAggregate mapper', () => {
    it('Should map AccountAggregate to AccountAggregateModel', () => {
        const accountAggregate = AccountAggregate.create({
            accountNumber: 'string',
            balance: 100,
            accountType: {} as any,
            customerId: 'string'
        });
        expect(accountAggregate.isSuccess).to.be.true;
        const accountAggregateResult = accountAggregate.getValue();
        const accountAggregateMapper = new AccountAggregateMapper();
        const accountAggregateModel = accountAggregateMapper.toPersistance(accountAggregateResult);
        expect(accountAggregateModel.accountAggregateId).to.equal(accountAggregateResult.id.toString());
        /* Assertions here */
    });
    it('Should map AccountAggregateModel to AccountAggregate', () => {
        const accountAggregateModel: AccountAggregateModel = {
            accountAggregateId: uuid().toUpperCase(),
            accountNumber: 'string',
            balance: 100,
            accountType: {} as any,
            customerId: 'string'
        };
        const accountAggregateMapper = new AccountAggregateMapper();
        const accountAggregate = accountAggregateMapper.toDomain(accountAggregateModel);
        expect(accountAggregateModel.accountAggregateId).to.equal(accountAggregate.id.toString());
        /* Assertions here */
    });
});
