export const setUserName = (name) => {
    return {
        type: "SET_NAME",
        payload: name
    };
}

export const setUserAge = (age) => {
    return {
        type: 'SET_AGE',
        payload: age
    }
}