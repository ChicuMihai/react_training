const initialState = { result: 1, lastValue: [] };
const mathReducer = (state = initialState, action) => {



    switch (action.type) {

        case "ADD":
            state = {
                ...state, result: state.result + action.payload, lastValue: [...state.lastValue, action.payload]
            }
            break;
        case "SUBTRACT":
            state = {
                ...state, result: state.result - action.payload, lastValue: [...state.lastValue, action.payload]
            }
            break;

        case "MULTIPLICATION":
            state = {
                ...state, result: state.result * action.payload, lastValue: [...state.lastValue, action.payload]
            }
            break;
        case "DIVISION":
            state = {
                ...state, result: state.result / action.payload, lastValue: [...state.lastValue, action.payload]
            }
            break;
        default:


    }
    return state;
};
export default mathReducer;