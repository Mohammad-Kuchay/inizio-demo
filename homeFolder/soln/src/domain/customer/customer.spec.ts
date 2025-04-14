import { expect } from 'chai';
import { Customer } from './customer';

describe('Customer Aggregate', () => {
    it('Should create Customer with valid props', () => {
        let customer = Customer.create({
            customerNumber: 'string',
            name: 'string',
            email: 'string',
            phoneNumber: 'string',
            address: {} as any
        });

        expect(customer.isSuccess).to.eq(true);
        expect(customer.message).to.eq(undefined);
    });
});
