export const set_language = "set_language";

export default (state = null, action) => {
    switch(action.type)
    {
        case set_language:
            return action.language;
        default:
            return state;
    }
}
