import { Profile, ValidateProfileError } from '../../types/profile';

export const validateProfile = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }

    const { first, lastname, age } = profile;

    const errors: ValidateProfileError[] = [];

    if (!first?.trim() || !lastname?.trim()) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    return errors;
};
