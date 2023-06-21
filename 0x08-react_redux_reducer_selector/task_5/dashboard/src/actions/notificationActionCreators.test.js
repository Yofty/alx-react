import {
    SET_TYPE_FILTER,
    NotificationTypeFilters,
    MARK_AS_READ,
} from './notificationActionTypes';
import {
    markAsAread,
    setNotificationFilter,
} from './notificationActionCreators';

describe('action ctreators component test', () => {
    it('markAsAread function', () => {
        const data = {
            type: MARK_AS_READ,
            index:1,
        };
        const result = markAsAread(1);

        expect(result).toEqual(data);
    });

    it('serNotificationFilter Function', () => {
        const data = {
            type: SET_TYPE_FILTER,
            filter: 'DEFAULT',
        };
        const result = setNotificationFilter(NotificationTypeFilters.DEFAULT);

        expect(result).toEqual(data);
    });
});