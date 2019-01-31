const initialUserState = {
    name: "Anna",
    age: 27
};
const userState = JSON.parse(localStorage.getItem('users'));
export const user = (state = userState, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            }
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };
            break;
        default:


    }
    return state;


}
