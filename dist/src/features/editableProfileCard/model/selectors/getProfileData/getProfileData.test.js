import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileData } from './getProfileData';
describe('getProfileData.test', function () {
    test('should return data', function () {
        var data = {
            first: 'Дмитрий',
            lastname: 'Мельников',
            age: 22,
            currency: Currency.USD,
            country: Country.BELARUS,
            city: 'Гомель',
            username: '',
        };
        var state = {
            profile: {
                data: data,
            },
        };
        expect(getProfileData(state)).toEqual(data);
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getProfileData(state)).toEqual(undefined);
    });
});
