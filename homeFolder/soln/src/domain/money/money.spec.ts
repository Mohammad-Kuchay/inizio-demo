import { expect } from 'chai';
import { Money } from './money';

describe('Money Value object', () => {
    it('Should create Money with valid props', () => {
        let money = Money.create({
            currency: 'string',
            amount: 100
        });

        expect(money.isSuccess).to.eq(true);
        expect(money.message).to.eq(undefined);
    });
});
