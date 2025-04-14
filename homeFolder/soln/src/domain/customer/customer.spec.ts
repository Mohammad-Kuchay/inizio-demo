import { expect } from 'chai';
import { Customer } from './customer';

describe('Customer Aggregate', () => {
    it('Should create Customer with valid props', () => {
        let customer = Customer.create({
            customerId: 'string',
            name: 'string'
        });

        expect(customer.isSuccess).to.eq(true);
        expect(customer.message).to.eq(undefined);
    });
});
