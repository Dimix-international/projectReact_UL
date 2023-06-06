import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';
describe('classNames', function () {
    test('with only first param', function () {
        render(_jsx(Button, { children: "Test" }));
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});
