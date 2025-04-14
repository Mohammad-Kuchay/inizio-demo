import { IMapper, UniqueEntityID } from '@neudesic/inizio-node-core';
import { Customer } from '../../../domain/customer';
import { CustomerModel } from '../sqldb_repositories/models';

/**
 * Mapper for mapping Customer and CustomerModel
 *
 * @export
 * @class CustomerMapper
 * @implements {IMapper<Customer, CustomerModel>}
 */
export class CustomerMapper implements IMapper<Customer, CustomerModel> {
    /**
     * Map from Customer to CustomerModel
     *
     * @param {Customer} entity
     * @returns {CustomerModel}
     * @memberof CustomerMapper
     */
    toPersistance(entity: Customer): CustomerModel {
        const model: CustomerModel = {
            customerId: entity.id.toString(),
            customerNumber: entity.customerNumber,
            name: entity.name,
            email: entity.email,
            phoneNumber: entity.phoneNumber,
            address: entity.address
        };
        return model;
    }

    /**
     * Map from CustomerModel to Customer
     *
     * @param {CustomerModel} model
     * @returns {Customer}
     * @memberof CustomerMapper
     */
    toDomain(model: CustomerModel): Customer {
        const entity: Customer = Customer.create(
            {
                customerNumber: model.customerNumber,
                name: model.name,
                email: model.email,
                phoneNumber: model.phoneNumber,
                address: model.address
            },
            new UniqueEntityID(model.customerId)
        ).getValue();
        return entity;
    }
}
