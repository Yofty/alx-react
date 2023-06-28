import { selectCourse, UnSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('test contents of action creators', () => {
    it('selectCourse', () => {
        const result = selectCourse(1);;
        expect(result).toEqual({ type: SELECT_COURSE, index: 1 });
    });

    it('unSelectCourse', () => {
        const result = UnSelectCourse(1);
        expect(result).toEqual({ type: UNSELECT_COURSE, index: 1 });
    });
});