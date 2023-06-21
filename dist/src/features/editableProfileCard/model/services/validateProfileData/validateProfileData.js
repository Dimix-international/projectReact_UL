import { ValidateProfileError } from '../../types/editableProfileCardSchema';
export var validateProfileData = function (profile) {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }
    var first = profile.first, lastname = profile.lastname, age = profile.age;
    var errors = [];
    if (!first || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }
    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }
    return errors;
};
