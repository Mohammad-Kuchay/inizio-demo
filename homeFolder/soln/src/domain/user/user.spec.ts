import { expect } from 'chai';
import { User } from './user';

describe('User Value object', () => {
    it('Should create User with valid props', () => {
        let user = User.create({
            firstName: 'string',
            lastName: 'string',
            email: 'string'
        });

        expect(user.isSuccess).to.eq(true);
        expect(user.message).to.eq(undefined);
    });
});
