import { expect } from 'chai';
import { ContactInfo } from './contact_info';

describe('ContactInfo Value object', () => {
    it('Should create ContactInfo with valid props', () => {
        let contactInfo = ContactInfo.create({
            email: 'string',
            phone: 'string'
        });

        expect(contactInfo.isSuccess).to.eq(true);
        expect(contactInfo.message).to.eq(undefined);
    });
});
