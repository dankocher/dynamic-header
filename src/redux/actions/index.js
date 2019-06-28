import {set_user} from "../reducers/user";
import {set_language} from "../reducers/language";
import {set_scroll} from "../reducers/scroll";

export const setUser = (user) => ({
    type: set_user,
    user
});

export const setLanguage = (language) => ({
    type: set_language,
    language
});
export const setScroll = (scroll) => ({
    type: set_scroll,
    scroll
});