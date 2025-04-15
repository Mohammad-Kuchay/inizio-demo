import { expect } from 'chai';
import { Customer } from './customer';

describe('Customer Entity', () => {
    it('Should create Customer with valid props', () => {
        let customer = Customer.create({
            name: 'string',
            email: 'string',
            phone: 'string'
        });

        expect(customer.isSuccess).to.eq(true);
        expect(customer.message).to.eq(undefined);
    });
});
