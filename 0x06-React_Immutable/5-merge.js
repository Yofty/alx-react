import { List, Map } from 'immutable';

export const concatElements = (page1, page2) => List(page1).concate(List(page2));

export const mergeElements = (page1, page2) => Map(page1).merge(Map(page2));
