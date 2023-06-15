import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes.js';

export const selectCourse = (index) => {
    return {
        type: SELECT_COURSE,
        index,
    };
};

export const UnSelectCourse = (index) => {
    return {
        type: UNSELECT_COURSE,
        index,
    };
};