import { expect } from 'chai';
import { Customer } from '../../../../domain/customer';
import { CustomerMapper } from '../customer_mapper';
import { CustomerModel } from '../../sqldb_repositories/models';
import { v4 as uuid } from 'uuid';

describe('Customer mapper', () => {
    it('Should map Customer to CustomerModel', () => {
        const customer = Customer.create({
            name: 'string',
            email: 'string',
            phone: 'string'
        });
        expect(customer.isSuccess).to.be.true;
        const customerResult = customer.getValue();
        const customerMapper = new CustomerMapper();
        const customerModel = customerMapper.toPersistance(customerResult);
        expect(customerModel.customerId).to.equal(customerResult.id.toString());
        /* Assertions here */
    });
    it('Should map CustomerModel to Customer', () => {
        const customerModel: CustomerModel = {
            customerId: uuid().toUpperCase(),
            name: 'string',
            email: 'string',
            phone: 'string'
        };
        const customerMapper = new CustomerMapper();
        const customer = customerMapper.toDomain(customerModel);
        expect(customerModel.customerId).to.equal(customer.id.toString());
        /* Assertions here */
    });
});
