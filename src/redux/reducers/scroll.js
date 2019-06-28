export const set_scroll = "set_scroll";

export default (state = 0, action) => {
    switch(action.type)
    {
        case set_scroll:
            return action.scroll;
        default:
            return state;
    }
}
