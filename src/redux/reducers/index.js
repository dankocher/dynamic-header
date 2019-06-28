import { combineReducers } from 'redux';

import user from './user';
import language from './language';
import scroll from './scroll';

export default combineReducers({
    user,
    language,
    scroll,
});