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
            name: entity.name,
            email: entity.email,
            phone: entity.phone
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
                name: model.name,
                email: model.email,
                phone: model.phone
            },
            new UniqueEntityID(model.customerId)
        ).getValue();
        return entity;
    }
}
