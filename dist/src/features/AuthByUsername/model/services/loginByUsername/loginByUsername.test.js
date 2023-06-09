/* import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

// для ts
const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername.test', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    test('success login', async () => {
        const userValue = { username: 'admin', id: '1' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
        // loginByUsername - создает асинхронный thunk (action)
        const action = loginByUsername({ username: 'admin', password: '123' });
        const result = await action(dispatch, getState, undefined);

        // проверим что dispatch был вызван с аргументами
        expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        // проверим что dispatch был вызван 3 раза
        expect(dispatch).toHaveBeenCalledTimes(3);
        // проверим что метод пост был вызван
        expect(mockedAxios.post).toHaveBeenCalled();
        // проверим request status
        expect(result.meta.requestStatus).toBe('fulfilled');
        // проверим payload
        expect(result.payload).toEqual(userValue);
    });

    test('error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.reject());
        // loginByUsername - создает асинхронный thunk (action)
        const action = loginByUsername({ username: '123', password: '123' });
        const result = await action(dispatch, getState, undefined);
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('authError');
    });
}); */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';
describe('loginByUsername.test', function () {
    test('success login', function () { return __awaiter(void 0, void 0, void 0, function () {
        var userValue, thunk, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userValue = { username: 'admin', id: '1' };
                    thunk = new TestAsyncThunk(loginByUsername);
                    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
                    return [4 /*yield*/, thunk.callThunk({ username: 'admin', password: '123' })];
                case 1:
                    result = _a.sent();
                    // проверим что dispatch был вызван с аргументами
                    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
                    // проверим что dispatch был вызван 3 раза
                    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
                    // проверим что метод пост был вызван
                    expect(thunk.api.post).toHaveBeenCalled();
                    // проверим request status
                    expect(result.meta.requestStatus).toBe('fulfilled');
                    // проверим payload
                    expect(result.payload).toEqual(userValue);
                    return [2 /*return*/];
            }
        });
    }); });
    test('error login', function () { return __awaiter(void 0, void 0, void 0, function () {
        var thunk, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    thunk = new TestAsyncThunk(loginByUsername);
                    thunk.api.post.mockReturnValue(Promise.reject());
                    return [4 /*yield*/, thunk.callThunk({ username: 'admin', password: '123' })];
                case 1:
                    result = _a.sent();
                    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
                    // проверим request status
                    expect(result.meta.requestStatus).toBe('rejected');
                    expect(result.payload).toBe('authError');
                    return [2 /*return*/];
            }
        });
    }); });
});
