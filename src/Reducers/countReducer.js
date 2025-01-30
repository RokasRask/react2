export default function countReducer(state, action) {

    let newState = state;

    switch (action.type) {
        case 'addOne':
            newState = state + 1;
            break;

        case 'removeOne':
            newState = state - 1;
            break;

        case 'add':
            newState = state + action.payload;
            break;

        case 'multiply':
            newState = state * action.payload;
            break;

        default:
            newState = state;
    }

    return newState;
}