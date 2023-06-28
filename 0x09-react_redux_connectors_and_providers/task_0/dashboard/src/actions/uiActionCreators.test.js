import {
    login,
    logout,
    displyNotificationDrawer,
    hideNotificationDrawer,
} from './uiActionCreators';
import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

describe('tests uiActionCreator Components', () => {
    it('tests login function', () => {
        const user = { email: 'new@gmail.com', password: 192837465 };
        const data = { type: LOGIN, user };
        const result = login(user.email, user.password);

        expect(result).toEqual(data);
    });

    it('Logout function', () => {
        const data = { type: LOGOUT };
        const result = logout();

        expect(result).toEqual(data);
    });

    it('displayNotificationDrawer function', () => {
        const data = { type: DISPLAY_NOTIFICATION_DRAWER };
        const result = displyNotificationDrawer();

        expect(result).toEqual(data);
    });

    it('hideNotificationDrawer function', () => {
        const data = { type: HIDE_NOTIFICATION_DRAWER };
        const result = hideNotificationDrawer();

        expect(result).toEqual(data);
    });
});