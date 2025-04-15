import { expect } from 'chai';
import { AccountAggregate } from './account_aggregate';

describe('AccountAggregate Aggregate', () => {
    it('Should create AccountAggregate with valid props', () => {
        let accountAggregate = AccountAggregate.create({
            accountNumber: 'string',
            balance: 100,
            accountType: {} as any,
            customerId: 'string'
        });

        expect(accountAggregate.isSuccess).to.eq(true);
        expect(accountAggregate.message).to.eq(undefined);
    });
});
