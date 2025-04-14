import { expect } from 'chai';
import { Address } from './address';

describe('Address Value object', () => {
    it('Should create Address with valid props', () => {
        let address = Address.create({
            street: 'string',
            city: 'string',
            state: 'string',
            country: 'string',
            postalCode: 'string'
        });

        expect(address.isSuccess).to.eq(true);
        expect(address.message).to.eq(undefined);
    });
});
